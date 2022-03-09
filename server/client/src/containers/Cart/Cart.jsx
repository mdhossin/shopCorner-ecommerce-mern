import React from "react";
import Button from "../../components/Common/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const isCartOpen = true;
  return (
    <div className="cart">
      <div className="cart-header">
        {isCartOpen && (
          <Button
            borderless
            variant="empty"
            ariaLabel="close the cart"
            icon={<AiOutlineClose />}
            // onClick={toggleCart}
          />
        )}
      </div>
      {/* {cartItems.length > 0 ? (
            <div className='cart-body'>
              <CartList
                toggleCart={toggleCart}
                cartItems={cartItems}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          ) : (
            <div className='empty-cart'>
              <BagIcon />
              <p>Your shopping cart is empty</p>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className='cart-checkout'>
              <CartSummary cartTotal={cartTotal} />
              <Checkout
                handleShopping={handleShopping}
                handleCheckout={handleCheckout}
                placeOrder={placeOrder}
                authenticated={authenticated}
              />
            </div>
          )} */}
    </div>
  );
};

export default Cart;
