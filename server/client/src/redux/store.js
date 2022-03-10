import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// eta muloto browser er redux devtool dekhar jonno

import { composeWithDevTools } from "@redux-devtools/extension";
import navigationReducer from "./reducers/navigationReducers";

const reducers = combineReducers({
  navigation: navigationReducer,
});
const initalstate = {};
// i can add here more middleware just add inside the array seperate with comma
const middleware = [thunk];

// createstore tin ti parameter recive korbe
const store = createStore(
  reducers,
  initalstate,
  // ekta reducer hole just thunk like dilei hoya jabe
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
