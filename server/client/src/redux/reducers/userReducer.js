import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,
  //   USER_DETAILS_REQUEST,
  //   USER_DETAILS_SUCCESS,
  //   USER_DETAILS_FAIL,
  //   USER_PROFILE_UPDATE_REQUEST,
  //   USER_PROFILE_UPDATE_SUCCESS,
  //   USER_PROFILE_UPDATE_FAIL,
  //   USER_PROFILE_RESET,
  //   SAVE_USER_SHIPPING_ADDRESS,
  //   USER_LIST_REQUEST,
  //   USER_LIST_SUCCESS,
  //   USER_LIST_FAIL,
  //   USER_DELETE_REQUEST,
  //   USER_DELETE_SUCCESS,
  //   USER_DELETE_FAIL,
  //   USER_EDIT_RESET,
  //   USER_EDIT_REQUEST,
  //   USER_EDIT_SUCCESS,
  //   USER_EDIT_FAIL,
  //   USER_DELETE_RESET,
} from "../constants/userConstants";

// user login action
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

// user register action
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_REGISTER_RESET:
      return {};

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};