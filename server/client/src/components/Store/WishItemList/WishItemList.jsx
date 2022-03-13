import React from "react";
import { HiX } from "react-icons/hi";

const WishItemList = ({ cartItems }) => {
  console.log(cartItems, "whist");
  return (
    <div className="wishlist">
      {cartItems.map((item, index) => (
        <div key={`index-${index}`} className="wishlist__items">
          <div className="wishlist__items__item">
            <img
              src={item.imageUrl}
              className="wishlist__items__item__img"
              alt=""
            />
            <div className="wishlist__items__item__details">
              <a
                href="#product"
                className="wishlist__items__item__details-name"
              >
                {item.name}
              </a>
              <span className="wishlist__items__item__details-price">
                ${item.totalPrice}
              </span>
              <button className="wishlist__items__item__details-button">
                Selet Options
              </button>
            </div>

            <div className="wishlist__items__item__close">
              <HiX />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishItemList;
