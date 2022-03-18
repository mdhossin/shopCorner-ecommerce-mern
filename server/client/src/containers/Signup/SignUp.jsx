import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { register } from "../../redux/actions/userActions";
import Input from "./Input";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password } = values;
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const userRegister = useSelector((state) => state.userRegister);

  const {
    loading: regLoading,
    error: regError,
    userInfo: regInfo,
  } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (regError) {
      addToast(regError, { appearance: "error", autoDismiss: true });
    } else if (regInfo) {
      addToast(regInfo.message, {
        appearance: "success",
        autoDismiss: true,
      });
      // history.push("/");
    }
  }, [regInfo, regError, addToast]);

  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Sign up</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            {/* <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="contact__form__div-input"
              />
            </div> */}

            {/* <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Password
              </label>
              <Input type="password" placeholder="Your Password" />
            </div>

            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Confirm Password
              </label>
              <Input type="password2" placeholder="Confirm Password" />
            </div> */}

            <button className="button" type="submit">
              {regLoading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Sign Up"
              )}
            </button>

            <Link to="/signin">
              {" "}
              <button
                style={{ fontSize: "15px" }}
                className="button-primary"
                type="submit"
              >
                Already have an account ? Sign in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
