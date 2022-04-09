import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/orderConstants";
import axios from "axios";

// Create Order action
export const createOrder = (order, token, navigate) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const { data } = await axios.post("/api/order/new", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });

    navigate("/success");
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
