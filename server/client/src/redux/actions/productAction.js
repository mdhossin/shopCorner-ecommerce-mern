import axios from "axios";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

// fetch all products from DB
export const fetchProducts = (products) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_LOADING,
    });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // console.log(error);
  }
};

// create product action
export const createProduct = (product, token) => async (dispatch) => {
  // console.log(product, "product");
  try {
    dispatch({
      type: CREATE_PRODUCT_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };

    const { data } = await axios.post("/api/products", product, config);
    // console.log(data, access_token, "logout action");

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
