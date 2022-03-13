import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import CartList from "../../components/Store/CartList/CartList";
import CartSummary from "../../components/Store/CartSummary/CartSummary";
import CheckOut from "../../components/Store/Checkout/CheckOut";

import headphone from "../../assets/images/headphone-1.jpg";
import watch from "../../assets/images/watch-2.jpg";
import watch2 from "../../assets/images/watch-3.jpg";

const Cart = ({ setCartOpen, isCartOpen }) => {
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
  ];
  console.log(isCartOpen, "iscartopen");
  const cartTotal = 35;

  return (
    <div className="cart">
      <div className="cart__header">
        <h5 className="cart__header-title">Shopping Cart (0)</h5>
        <AiOutlineClose
          className="cart__header-icon"
          onClick={() => setCartOpen(false)}
        />
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__header__body">
          <CartList
            // toggleCart={toggleCart}
            cartItems={cartItems}
            // handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      ) : (
        <div className="cart__empty">
          <BiShoppingBag />
          <p>Your shopping cart is empty</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart__checkout">
          <CartSummary cartTotal={cartTotal} />
          <CheckOut
          // handleShopping={handleShopping}
          // handleCheckout={handleCheckout}
          // placeOrder={placeOrder}
          // authenticated={authenticated}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
