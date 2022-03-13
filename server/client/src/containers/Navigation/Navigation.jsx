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
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const Navigation = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishListOpen, setisWishListOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(false);
  };

  const toogleWishList = () => {
    setisWishListOpen(false);
  };
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
      <nav className="nav container-div">
        <a href="#home" className="nav__logo">
          <img width="70" src={shop} alt="shop" />
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Shop
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Products
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
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
              <Link to="/" className="nav__mobileMenu nav__link">
                <AiOutlineHome />
              </Link>
            </li>

            <NavDropdown
              title={<AiOutlineUser className="nav__dropdown-icon" />}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="nav__dropdown__item"
                onClick={() => navigate("/signin")}
              >
                Sign in
              </NavDropdown.Item>
              <NavDropdown.Item
                className="nav__dropdown__item"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>

            <li className="nav__item">
              <a
                href="#services"
                className="nav__wrapper nav__icons__heart nav__link"
                aria-expanded={isWishListOpen ? "true" : "false"}
                onClick={() => {
                  setisWishListOpen((prev) => !prev);
                }}
              >
                <AiOutlineHeart />
                <span className="nav__icons__cart">1</span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__wrapper nav__link"
                aria-expanded={isCartOpen ? "true" : "false"}
                onClick={() => {
                  setCartOpen((prev) => !prev);
                }}
              >
                <AiOutlineShoppingCart />
                <span className="nav__icons__cart">0</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hidden cart drawer */}
      <div className={isCartOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <Cart setCartOpen={setCartOpen} isCartOpen={isCartOpen} />
        </div>
        <div
          className={
            isCartOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toggleCart}
        />
      </div>

      {/* hidden wishlist drawer */}
      <div className={isWishListOpen ? "mini-cart-open" : ""}>
        <div className="mini-cart">
          <WishList
            setisWishListOpen={setisWishListOpen}
            isWishListOpen={isWishListOpen}
          />
        </div>
        <div
          className={
            isWishListOpen ? "drawer-backdrop dark-overflow" : "drawer-backdrop"
          }
          onClick={toogleWishList}
        />
      </div>
    </header>
  );
};

export default Navigation;
