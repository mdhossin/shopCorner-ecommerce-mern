import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";
import shop from "../../assets/images/shoLogo.PNG";
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img width="70" src={shop} alt="shop" />
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${active === "#home" ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`nav__link ${active === "#about" ? "active" : ""}`}
              >
                Shop
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className={`nav__link ${active === "#skills" ? "active" : ""}`}
              >
                Products
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className={`nav__link ${
                  active === "#services" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="nav__btns__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenuAltRight />
          </div>
        </div>

        <div className="nav__icons">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={`nav__mobileMenu nav__link ${
                  active === "#home" ? "active" : ""
                }`}
              >
                <AiOutlineHome />
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActive("#about")}
                className={`nav__link ${active === "#about" ? "active" : ""}`}
              >
                <AiOutlineUser />
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActive("#services")}
                className={`nav__wrapper nav__icons__heart nav__link ${
                  active === "#services" ? "active" : ""
                }`}
              >
                <AiOutlineHeart />
                <span className="nav__icons__cart">1</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActive("#contact")}
                className={`nav__wrapper nav__link ${
                  active === "#contact" ? "active" : ""
                }`}
              >
                <AiOutlineShoppingCart />
                <span className="nav__icons__cart">0</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
