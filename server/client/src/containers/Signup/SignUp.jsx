import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Common/Input/Input";

const SignUp = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Sign up</h3>

          <form action="" className="contact__form">
            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Name
              </label>
              <Input type="text" placeholder="Your name" />
            </div>

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

            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Confirm Password
              </label>
              <Input type="password2" placeholder="Confirm Password" />
            </div>

            <button className="button" type="button">
              Sign Up
            </button>

            <Link to="/signin">
              {" "}
              <button
                style={{ fontSize: "15px" }}
                className="button-primary"
                type="button"
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
