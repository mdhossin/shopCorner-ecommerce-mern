import React, { Fragment, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";

import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Common/Loading/Loading";
import { clearErrors, getOrderDetails } from "../../redux/actions/orderActions";

const OrderDetails = () => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { addToast } = useToasts();

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: "error", autoDismiss: true });
      dispatch(clearErrors());
    }
    dispatch(getOrderDetails(orderId));
  }, [dispatch, error, addToast, orderId]);
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Fragment>
          {/* <MetaData title="Order Details" /> */}
          <div className="orderDetails grid container-div">
            <div className="orderDetails__container grid">
              <h2>
                Order Id: <span>#{order && order._id}</span>
              </h2>
              <div className="orderDetails__container__box">
                <h3>Shipping Info</h3>
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p className="address">Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <div className="orderDetails__container__box">
                <h3>Payment</h3>
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>${order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <div className="orderDetails__container__box">
                <h3>Order Status</h3>
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetails__cartItems">
              <h3>Order Items:</h3>
              <div className="orderDetails__cartItems__container">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ${item.price} ={" "}
                        <b>${item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
