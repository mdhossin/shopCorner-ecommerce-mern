import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import { userLoginReducer } from "./userReducer";
import { createProductReducer, productReducer } from "./productReducer";

export default combineReducers({
  alert,
  auth,
  userLogin: userLoginReducer,
  products: createProductReducer,
  allProducts: productReducer,
});
