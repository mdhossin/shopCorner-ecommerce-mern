import React from "react";
import shop from "../../assets/images/shoLogo.PNG";
import payment from "../../assets/images/payment.PNG";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container-div grid">
        <div className="footer__content">
          <a href="#home" className="footer__logo">
            <img width="90" src={shop} alt="shop" />
          </a>
          <p className="footer__description">
            Phone: <br /> +(88) 02345789{" "}
          </p>
          <p className="footer__description">
            Email: <br /> quickshop@gmail.com{" "}
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Help</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Help
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Feedback
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Unsubscribe
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Reservations
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Follow Us</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Instagram
              </a>
            </li>

            <li>
              <a href="#home" className="footer__link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Youtube
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Policies</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Gift Card Conditions
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Shipping
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Return
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <p>
            Subscribe to our newsletter and <br /> get 10% off your first
            purchase
          </p>
          <form action="" className="footer__social__form">
            <div className="footer__social__form__subscribe">
              <input type="email" name="email" id="" />
              <button>
                <AiOutlineArrowRight className="footer__social__form__subscribe-icon" />
              </button>
            </div>
          </form>
          <a href="#home" className="footer__social-link">
            <img src={payment} alt="" />
          </a>
        </div>
      </div>
      <p className="footer__copyright">
        &copy; QuickShop. All Right Reserved 2022
      </p>
    </footer>
  );
};

export default Footer;
