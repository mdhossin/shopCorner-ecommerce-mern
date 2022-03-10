/*
 *
 * Navigation actions
 *
 */

import {
  TOGGLE_MENU,
  TOGGLE_CART,
  TOGGLE_BRAND,
  SEARCH_CHANGE,
} from "../contants/navigationConstants";

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const toggleBrand = () => {
  return {
    type: TOGGLE_BRAND,
  };
};

export const onSearch = (v) => {
  return {
    type: SEARCH_CHANGE,
    payload: v,
  };
};
