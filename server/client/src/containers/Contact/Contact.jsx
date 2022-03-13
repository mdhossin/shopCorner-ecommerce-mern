import React from "react";
import { BsTelephone, BsGlobe, BsFacebook, BsPinterest } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="contacts">
        <div className="contacts__content container-div grid">
          <div className="contacts__content__info">
            <div className="contacts__content__info__wrapper grid">
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <BsTelephone />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <p>+8801836855666</p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <BsGlobe />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <p>
                    <a href="mailto:sahadat.developer@gmail.com">
                      quickshop@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__info">
                <div className="contacts__content__info__wrapper__info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contacts__content__info__wrapper__info-dec">
                  <p>Kingston, New York 12401 United States</p>
                </div>
              </div>
              <div className="contacts__content__info__wrapper__social">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="#home">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="//pinterest.com">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="//thumblr.com">
                      <i className="fa fa-tumblr" />
                    </a>
                  </li>
                  <li>
                    <a href="//vimeo.com">
                      <BsPinterest />
                    </a>
                  </li>
                  <li>
                    <a href="//twitter.com">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contacts__content__details">
            <div className="contacts__content__details__form">
              <div className="contacts__content__details__form__title">
                <h2>Get In Touch</h2>
              </div>
              <form className="contacts__content__details__form__desc">
                <div className="row">
                  <div className="col-lg-6">
                    <input name="name" placeholder="Name*" type="text" />
                  </div>
                  <div className="col-lg-6">
                    <input name="email" placeholder="Email*" type="email" />
                  </div>
                  <div className="col-lg-12">
                    <input name="subject" placeholder="Subject*" type="text" />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      defaultValue={""}
                    />
                    <button className="submit" type="submit">
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
