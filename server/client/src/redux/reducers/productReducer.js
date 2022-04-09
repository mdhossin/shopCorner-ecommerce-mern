// import {
//   CREATE,
//   DELETE,
//   FETCH_ALL,
//   UPDATE,
// } from "../constants/productConstants";

import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_LOADING,
  ALL_PRODUCTS_SUCCESS,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCT_BY_ID_FAIL,
  PRODUCT_BY_ID_REQUEST,
  PRODUCT_BY_ID_RESET,
  PRODUCT_BY_ID_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_RESET,
  PRODUCT_DELETE_SUCCESS,
} from "../constants/productConstants";

// const productReducer = (state = { isLoading: false, products: [] }, action) => {
//   switch (action.type) {
//     case "START_LOADING":
//       return { ...state, isLoading: true };
//     case "END_LOADING":
//       return { ...state, isLoading: false };
//     // case FETCH_ALL:
//     //   return {
//     //     ...state,
//     //     posts: action.payload.data,
//     //     currentPage: action.payload.currentPage,
//     //     numberOfPages: action.payload.numberOfPages,
//     //   };

//     // case FETCH_POST:
//     //   return { ...state, post: action.payload.post };

//     case CREATE:
//       return { ...state, products: [...state.products, action.payload] };
//     // case UPDATE:
//     //   return {
//     //     ...state,
//     //     products: state.products.map((post) =>
//     //       post._id === action.payload._id ? action.payload : post
//     //     ),
//     //   };
//     // case DELETE:
//     //   return {
//     //     ...state,
//     //     posts: state.posts.filter((post) => post._id !== action.payload),
//     //   };
//     default:
//       return state;
//   }
// };

// export default productReducer;

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,

        products: action.payload,
      };

    case CREATE_PRODUCT_FAIL:
      return {
        loading: false,

        error: action.payload,
      };
    case CREATE_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};
const initState = {
  products: [],
};

// get all product
export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LOADING:
    case FETCH_PRODUCTS_LOADING:
      return {
        loading: true,
        ...state,
      };
    case ALL_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCTS_FAIL:
    case FETCH_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_DELETE_RESET:
      return {};

    default:
      return state;
  }
};

export const productByIdReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_BY_ID_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PRODUCT_BY_ID_RESET:
      return {};

    default:
      return state;
  }
};

// get admin all products
// get all product
export const adminProductReducer = (state = initState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LOADING:
      return {
        loading: true,
        ...state,
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
