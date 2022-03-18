import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";
export default combineReducers({
  alert,
  auth,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
