import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import {
  userListReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from "./userReducer";
import {
  adminProductReducer,
  createProductReducer,
  productByIdReducer,
  productDeleteReducer,
  productReducer,
} from "./productReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  alert,
  auth,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer,
  createProduct: createProductReducer,
  allProducts: productReducer,
  deleteProduct: productDeleteReducer,
  productById: productByIdReducer,
  adminProducts: adminProductReducer,
  userList: userListReducer,
  cart: cartReducer,
});
