import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Common/Input/Input";

const ForgotPassword = () => {
  return (
    <section className="section">
      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__title">Forgot your password?</h3>
          <p className="contact__desc">
            We will send you an email to reset your password.
          </p>

          <form action="" className="contact__form">
            <div className="contact__form__div">
              <label htmlFor="email" className="contact__form__div-tag">
                Email
              </label>
              <Input type="email" placeholder="Your Email" />
            </div>

            <div className="contact__form__reset">
              <button
                className="button contact__form__reset-submit"
                type="button"
              >
                Submit
              </button>

              <Link to="/signin" className="contact__form__reset-cancel">
                <button className="button-secondary" type="button">
                  Cancel
                </button>
              </Link>
            </div>
            <Link to="/signup" className="contact__form__reset-cancel">
              <button className="button-secondary" type="button">
                Singup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
