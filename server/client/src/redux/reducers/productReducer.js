// import {
//   CREATE,
//   DELETE,
//   FETCH_ALL,
//   UPDATE,
// } from "../constants/productConstants";

import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
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
    case FETCH_PRODUCTS_LOADING:
      return {
        loading: true,
        products: [],
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
