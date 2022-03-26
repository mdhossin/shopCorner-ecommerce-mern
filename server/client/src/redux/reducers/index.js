import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import { userLoginReducer } from "./userReducer";
import {
  adminProductReducer,
  createProductReducer,
  productByIdReducer,
  productDeleteReducer,
  productReducer,
} from "./productReducer";

export default combineReducers({
  alert,
  auth,
  userLogin: userLoginReducer,
  createProduct: createProductReducer,
  allProducts: productReducer,
  deleteProduct: productDeleteReducer,
  productById: productByIdReducer,
  adminProducts: adminProductReducer,
});
