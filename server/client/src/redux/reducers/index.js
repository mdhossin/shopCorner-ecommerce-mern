import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";
import dashboardReducer from "../../containers/Dashboard/reducer";
export default combineReducers({
  alert,
  auth,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  dashboard: dashboardReducer,
});
