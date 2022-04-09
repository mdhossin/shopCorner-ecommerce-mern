import React, { Fragment, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";

import { BsCreditCard, BsCalendar2Event, BsFillKeyFill } from "react-icons/bs";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/Common/CheckoutSteps/CheckoutSteps";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder } from "../../redux/actions/orderActions";

const CheckoutForm = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.userLogin?.userInfo);
  console.log(cartItems, "cartitem");

  const token = useSelector((state) => state.userLogin?.userInfo?.access_token);

  const { user } = auth;
  // const { error } = useSelector((state) => state.newOrder);

  console.log(shippingInfo, orderInfo, "shipping inot");

  const paymentData = {
    amount: Math.round(orderInfo?.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(paymentData, "amout");

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/process",
        paymentData,
        config
      );
      console.log(data);

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order, token));

          navigate("/success");
        } else {
          alert("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert(error.response.data.message);
      console.log(error?.message);
    }
  };

  return (
    <div className="container-div payment-checkout">
      <>
        {/* <MetaData title="Payment" /> */}
        <CheckoutSteps activeStep={2} />
        <div className="payment">
          <form className="payment__form" onSubmit={(e) => submitHandler(e)}>
            <h2>Card Info</h2>
            <div>
              <BsCreditCard />
              <CardNumberElement className="payment__form__input" />
            </div>
            <div>
              <BsCalendar2Event />
              <CardExpiryElement className="payment__form__input" />
            </div>
            <div>
              <BsFillKeyFill />
              <CardCvcElement className="payment__form__input" />
            </div>

            <input
              type="submit"
              value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className="button"
            />
          </form>
        </div>
      </>
    </div>
  );
};

const stripePromise = loadStripe(
  "pk_test_51JvwowKC3JWaPkrxsocY4mV0UOYb4E7w6GU4gxNZbHdabF0uCQ801GC6B0cqGfkBbm9Ve2PAVrczTC6MY1VyIweh00Fjcjsyhx"
);

const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payment;
