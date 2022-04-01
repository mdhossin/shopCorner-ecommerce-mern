import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_RESET,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
  // USER_REGISTER_SUCCESS,
  // USER_REGISTER_REQUEST,
  // USER_REGISTER_FAIL,
  // USER_REGISTER_RESET,

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

// user login action reuse action bot login and register
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

    case USER_LOGIN_RESET:
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

    default:
      return state;
  }
};
// user register action
export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        userLogout: action.payload,
      };

    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT_RESET:
      return {};

    default:
      return state;
  }
};

// only for admin
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };

    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
