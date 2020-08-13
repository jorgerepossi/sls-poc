import { combineReducers } from "redux";
import signUpReducer from "../pages/SignUp/SignUpSlice";

export default combineReducers({
  signUp: signUpReducer,
});
 