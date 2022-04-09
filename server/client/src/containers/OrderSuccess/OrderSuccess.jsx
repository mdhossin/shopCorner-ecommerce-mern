import React from "react";

import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <BsCheckLg />
      <h1>Your Order has been Placed successfully </h1>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
