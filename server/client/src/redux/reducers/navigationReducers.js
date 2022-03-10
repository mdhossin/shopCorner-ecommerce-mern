/*
 *
 * Navigation reducer
 *
 */

import {
  TOGGLE_MENU,
  TOGGLE_CART,
  SEARCH_CHANGE,
} from "../contants/navigationConstants";

const initialState = {
  isMenuOpen: false,
  isCartOpen: false,
  isBrandOpen: false,
  searchValue: "",
  searchSuggestions: [],
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
        isCartOpen: false,
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
        isMenuOpen: false,
      };

    case SEARCH_CHANGE:
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
};

export default navigationReducer;
