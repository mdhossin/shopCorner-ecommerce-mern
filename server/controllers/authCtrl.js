import Users from "../models/userModel.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  generateActiveToken,
  generateAccessToken,
  generateRefreshToken,
} from "../config/generateToken.js";
import sendMail from "../config/sendMail.js";

import { ACTIVE_TOKEN_SECRET, BASE_URL } from "../config/index.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";

// import { sendSms, smsOTP, smsVerify } from '../config/sendSMS'

// import { OAuth2Client } from 'google-auth-library'
// import fetch from 'node-fetch'

// const client = new OAuth2Client(`${process.env.MAIL_CLIENT_ID}`)
const CLIENT_URL = `${BASE_URL}`;

const authCtrl = {
  async register(req, res, next) {
    //  create schema useing joi for validation

    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(
          new RegExp(
            "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$"
          )
        )
        .required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    // console.log(req.body, "body from");
    if (error) {
      return next(error);
    }

    // check if user is in the database already
    try {
      // here useing the user model
      const exist = await Users.exists({ email: req.body.email });

      if (exist) {
        // here need to custom error send to the client side
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    try {
      // destructuring object
      const { name, email, password } = req.body;

      if (password?.length < 6) {
        return next(
          CustomErrorHandler.wrongValidation(
            "Password must be at least 6 charactor."
          )
        );
      }
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // prepare the model to store user data on databse
      const newUser = { name, email, password: hashedPassword };

      const active_token = generateActiveToken({ newUser });

      const url = `${CLIENT_URL}/active/${active_token}`;
      // console.log(url, "url");

      if (validateEmail(email)) {
        sendMail(email, url, "Verify your email address");
        return res.json({
          message: "Success! Please check your email and verify.",
        });
      }
    } catch (err) {
      return next(err);
    }
  },
  async activeAccount(req, res, next) {
    console.log(req.body, "active backend");
    try {
      const { activation_token } = req.body;

      const decoded = jwt.verify(activation_token, `${ACTIVE_TOKEN_SECRET}`);
      console.log(decoded, "decoded");
      const { newUser } = decoded;

      if (!newUser)
        return next(
          CustomErrorHandler.wrongValidation("Invalid authentication.")
        );

      const user = await Users.findOne({ email: newUser.email });
      if (user)
        return next(CustomErrorHandler.alreadyExist("Account already exists."));

      const new_user = new Users(newUser);

      await new_user.save();

      res.json({ message: "Account has been activated!" });
    } catch (err) {
      return next(err);
    }
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user)
        return next(
          CustomErrorHandler.wrongValidation("This account does not exits.")
        );

      // if user exists
      loginUser(user, password, res, next);
    } catch (err) {
      return next(err);
    }
  },
  async logout(req, res, next) {
    if (!req.user)
      return next(
        CustomErrorHandler.wrongValidation("Invalid Authentication.")
      );

    try {
      res.clearCookie("refreshtoken", { path: `/api/refresh_token` });

      await Users.findOneAndUpdate(
        { _id: req.user._id },
        {
          rf_token: "",
        }
      );

      return res.json({ message: "Logged out!" });
    } catch (err) {
      return next(err);
    }
  },
  async refreshToken(req, res, next) {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return next(CustomErrorHandler.wrongValidation("Please login now!"));

      const decoded = jwt.verify(
        rf_token,
        `${process.env.REFRESH_TOKEN_SECRET}`
      );
      if (!decoded.id)
        return next(CustomErrorHandler.wrongValidation("Please login now!"));

      const user = await Users.findById(decoded.id).select(
        "-password +rf_token"
      );
      if (!user)
        return next(
          CustomErrorHandler.wrongValidation("This email does not exist.")
        );

      if (rf_token !== user.rf_token)
        return next(CustomErrorHandler.wrongValidation("Please login now!"));

      const access_token = generateAccessToken({ id: user._id });
      const refresh_token = generateRefreshToken({ id: user._id }, res);

      await Users.findOneAndUpdate(
        { _id: user._id },
        {
          rf_token: refresh_token,
        }
      );
      console.log(access_token, user, "reresh token router");

      res.json({ access_token, user });
    } catch (err) {
      return next(err);
    }
  },
  // googleLogin: async(req, res) => {
  //   try {
  //     const { id_token } = req.body
  //     const verify = await client.verifyIdToken({
  //       idToken: id_token, audience: `${process.env.MAIL_CLIENT_ID}`
  //     })

  //     const {
  //       email, email_verified, name, picture
  //     } = verify.getPayload()

  //     if(!email_verified)
  //       return res.status(500).json({msg: "Email verification failed."})

  //     const password = email + 'your google secrect password'
  //     const passwordHash = await bcrypt.hash(password, 12)

  //     const user = await Users.findOne({account: email})

  //     if(user){
  //       loginUser(user, password, res)
  //     }else{
  //       const user = {
  //         name,
  //         account: email,
  //         password: passwordHash,
  //         avatar: picture,
  //         type: 'google'
  //       }
  //       registerUser(user, res)
  //     }

  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }
  // },
  // facebookLogin: async(req, res) => {
  //   try {
  //     const { accessToken, userID } = req.body

  //     const URL = `
  //       https://graph.facebook.com/v3.0/${userID}/?fields=id,name,email,picture&access_token=${accessToken}
  //     `

  //     const data = await fetch(URL)
  //     .then(res => res.json())
  //     .then(res => { return res })

  //     const { email, name, picture } = data

  //     const password = email + 'your facebook secrect password'
  //     const passwordHash = await bcrypt.hash(password, 12)

  //     const user = await Users.findOne({account: email})

  //     if(user){
  //       loginUser(user, password, res)
  //     }else{
  //       const user = {
  //         name,
  //         account: email,
  //         password: passwordHash,
  //         avatar: picture.data.url,
  //         type: 'facebook'
  //       }
  //       registerUser(user, res)
  //     }

  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }
  // },
  // loginSMS: async(req, res) => {
  //   try {
  //     const { phone } = req.body
  //     const data = await smsOTP(phone, 'sms')
  //     res.json(data)
  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }
  // },
  // smsVerify: async(req, res) => {
  //   try {
  //     const { phone, code } = req.body

  //     const data = await smsVerify(phone, code)
  //     if(!data?.valid) return res.status(400).json({msg: "Invalid Authentication."})

  //     const password = phone + 'your phone secrect password'
  //     const passwordHash = await bcrypt.hash(password, 12)

  //     const user = await Users.findOne({account: phone})

  //     if(user){
  //       loginUser(user, password, res)
  //     }else{
  //       const user = {
  //         name: phone,
  //         account: phone,
  //         password: passwordHash,
  //         type: 'sms'
  //       }
  //       registerUser(user, res)
  //     }

  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }
  // },
  // forgotPassword: async(req, res) => {
  //   try {
  //     const { account } = req.body

  //     const user = await Users.findOne({account})
  //     if(!user)
  //       return res.status(400).json({msg: 'This account does not exist.'})

  //     if(user.type !== 'register')
  //       return res.status(400).json({
  //         msg: `Quick login account with ${user.type} can't use this function.`
  //       })

  //     const access_token = generateAccessToken({id: user._id})

  //     const url = `${CLIENT_URL}/reset_password/${access_token}`

  //     if(validPhone(account)){
  //       sendSms(account, url, "Forgot password?")
  //       return res.json({msg: "Success! Please check your phone."})

  //     }else if(validateEmail(account)){
  //       sendMail(account, url, "Forgot password?")
  //       return res.json({msg: "Success! Please check your email."})
  //     }

  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }
  // },
};

const loginUser = async (user, password, res, next) => {
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    let msgError =
      user?.type === "register"
        ? "Password is incorrect."
        : `Password is incorrect. This account login with ${user?.type}`;

    return next(CustomErrorHandler.wrongValidation(msgError));
  }

  const access_token = generateAccessToken({ id: user._id });
  const refresh_token = generateRefreshToken({ id: user._id }, res);
  // console.log("login refresh", refresh_token);

  await Users.findOneAndUpdate(
    { _id: user._id },
    {
      rf_token: refresh_token,
    }
  );

  res.json({
    message: "Login Success!",
    access_token,
    user: { ...user._doc, password: "" },
  });
};

// const registerUser = async (user, res) => {
//   const newUser = new Users(user)

//   const access_token = generateAccessToken({id: newUser._id})
//   const refresh_token = generateRefreshToken({id: newUser._id}, res)

//   newUser.rf_token = refresh_token
//   await newUser.save()

//   res.json({
//     msg: 'Login Success!',
//     access_token,
//     user: { ...newUser._doc, password: '' }
//   })

// }

export default authCtrl;

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
