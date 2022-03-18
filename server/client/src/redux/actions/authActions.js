// import { postAPI, getAPI } from "../../utils/FetchData";
// // import { validRegister, validPhone } from "../../utils/Valid";
// // import { checkTokenExp } from "../../utils/checkTokenExp";
// import { ALERT } from "../constants/alertType";
// import { AUTH } from "../constants/authType";

// export const login = (userLogin) => async (dispatch) => {
//   try {
//     dispatch({ type: ALERT, payload: { loading: true } });

//     const res = await postAPI("login", userLogin);

//     dispatch({ type: AUTH, payload: res.data });

//     dispatch({ type: ALERT, payload: { success: res.data.message } });
//     localStorage.setItem("logged", "devat-channel");
//   } catch (error) {
//     dispatch({
//       type: ALERT,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
// user login

// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_LOGIN_REQUEST,
//     });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       "/api/users/login",
//       { email, password },
//       config
//     );

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     });

//     // localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
