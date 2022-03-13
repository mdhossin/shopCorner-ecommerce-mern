import React from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";

import headphone from "../../assets/images/headphone-1.jpg";
import watch from "../../assets/images/watch-2.jpg";
import watch2 from "../../assets/images/watch-3.jpg";

import WishItemList from "../../components/Store/WishItemList/WishItemList";
const WishList = ({ isWishListOpen, setisWishListOpen }) => {
  const cartItems = [
    {
      imageUrl: headphone,
      name: "Headphone",
      totalPrice: 200,
      quantity: 4,
    },
    {
      imageUrl: watch,
      name: "Watch",
      totalPrice: 300,
      quantity: 3,
    },
    {
      imageUrl: watch2,
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
    {
      imageUrl: watch2,
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
    {
      imageUrl: watch2,
      name: "Smart Watch",
      totalPrice: 500,
      quantity: 6,
    },
  ];
  return (
    <div className="cart">
      <div className="cart__header">
        <h5 className="cart__header-title">Wishlist Products</h5>
        <AiOutlineClose
          className="cart__header-icon"
          onClick={() => setisWishListOpen(false)}
        />
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__header__body">
          <WishItemList
            // toggleCart={toggleCart}
            cartItems={cartItems}
            // handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      ) : (
        <div className="cart__empty">
          <AiOutlineHeart />
          <p>Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};

export default WishList;
