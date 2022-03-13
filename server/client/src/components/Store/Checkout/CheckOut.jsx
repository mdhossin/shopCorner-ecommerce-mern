import React from "react";

const CheckOut = () => {
  const authenticated = false;
  return (
    <div className="easy-checkout">
      <div className="checkout-actions">
        {/* <Button
          variant='primary'
          text='Continue shopping'
        //   onClick={() => handleShopping()}
        /> */}
        <button className="button">Continue shopping</button>
        {authenticated ? (
          //   <Button
          //     variant='primary'
          //     text='Place Order'
          //     onClick={() => placeOrder()}
          //   />
          <button className="button-secondary">Place Order</button>
        ) : (
          //   <Button
          //     variant='primary'
          //     text='Proceed To Checkout'
          //     onClick={() => handleCheckout()}
          //   />
          <button className="button-secondary">Proceed To Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
