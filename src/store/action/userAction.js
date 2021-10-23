import axios from "axios";
import * as actionTypes from "./actionTypes";

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGIN_REQUEST });
    axios
      .post("/user/login", { email, password })
      .then((res) => {
        const data = res.data;
        dispatch({ type: actionTypes.LOGIN_REQUEST_SUCCESS, payload: data });
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.LOGIN_REQUEST_FAIL,
          payload:
            err.response 
        });
      });
  };
};

export const signup = (name, email, password) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SIGNUP_REQUEST });
    axios
      .post("/user/signup", { name, email, password })
      .then((res) => {
        const data = res.data;
        dispatch({ type: actionTypes.SIGNUP_REQUEST_SUCCESS, payload: data });
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.SIGNUP_REQUEST_FAIL,
          payload:
            err.response 
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT });
    localStorage.removeItem("user");
  };
};
