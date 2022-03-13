import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import CartSummary from "../components/Store/CartSummary/CartSummary";
import CheckOut from "../components/Store/Checkout/CheckOut";
const Cart = ({ setCartOpen, isCartOpen, onClickOutside }) => {
  const cartItems = [
    {
      name: "sony",
      price: 123,
    },
    {
      name: "sony",
      price: 123,
    },
    {
      name: "sony",
      price: 123,
    },
    {
      name: "sony",
      price: 123,
    },
  ];

  console.log(isCartOpen, "iscartopen");
  const cartTotal = 35;

  return (
    <div className="cart">
      <div className="cart__header">
        {isCartOpen && (
          <AiOutlineClose
            className="cart__header-icon"
            onClick={() => setCartOpen(false)}
          />
        )}
      </div>
      {cartItems.length > 0 ? (
        <div className="cart__header__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil r
            sed, nostrum necessitatibus natus enim dolorum quo blanditiis! vary
            avarfasd
          </p>
          {/* <CartList
            toggleCart={toggleCart}
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
          /> */}
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
