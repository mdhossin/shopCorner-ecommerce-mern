import React from "react";
import { Link } from "react-router-dom";

const CheckOut = ({ setCartOpen }) => {
  return (
    <div className="easy-checkout">
      <div className="checkout-actions">
        <div>
          <Link to="/shop">
            {" "}
            <button onClick={() => setCartOpen(false)} className="button">
              Continue shopping
            </button>
          </Link>
        </div>

        <div>
          <Link to="/login?redirect=shipping">
            <button onClick={() => setCartOpen(false)} className="button">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
