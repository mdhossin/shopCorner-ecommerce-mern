import React from "react";

import { FiTrash } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartList = ({ cartItems }) => {
  return (
    <div className="cart__header__body__list">
      {cartItems.map((item, index) => (
        <div key={index} className="cart__header__body__list__item">
          <img
            src={item.imageUrl}
            className="cart__header__body__list__item-img"
            alt=""
          />
          <div className="cart__header__body__list__item__details">
            <div className="cart__header__body__list__item__details__name">
              {" "}
              <a
                href="#home"
                className="cart__header__body__list__item__details__name-title"
              >
                {item.name}
              </a>
              <a href="#home">
                <FiTrash className="cart__header__body__list__item__details__name-delete" />
              </a>
            </div>

            <div className="cart__header__body__list__item__details__price">
              <div className="cart__header__body__list__item__details__price__wrapper">
                <div className="cart__header__body__list__item__details__price__wrapper-quantity">
                  <button className="cart__header__body__list__item__increase">
                    <AiOutlinePlus />
                  </button>
                  <span>0</span>
                  <button className="cart__header__body__list__item__decrease">
                    <AiOutlineMinus />
                  </button>
                </div>
                <div className="cart__header__body__list__item__details__price__wrapper-price">
                  $120
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
