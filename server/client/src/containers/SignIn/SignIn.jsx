import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Common/Input/Input";

const SignIn = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Sign In</h3>

          <form action="" className="contact__form">
            <div className="contact__form__div">
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
            <div className="contact__form__forgot">
              <Link to="/forgotpassword">Forgot your password?</Link>
            </div>

            <button className="button" type="button">
              Sign In
            </button>
            <Link to="/signup">
              {" "}
              <button className="button-primary" type="button">
                Don't have an account ? Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
