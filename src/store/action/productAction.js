import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_FOR_ALLPRODUCTS });
    axios
      .get("/products")
      .then((res) => {
        let data = res.data;
        dispatch({ type: actionTypes.SUCCESS_FOR_ALLPRODUCTS, payload: data });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FAIL_FOR_ALLPRODUCTS,
          payload:
            err.response 
        });
      });
  };
};

export const getCurrProd = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_FOR_CURRPROD });
    axios
      .get(`/products/${id}`)
      .then((res) => {
        let data = res.data;
        dispatch({ type: actionTypes.SUCCESS_FOR_CURRPROD, payload: data });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FAIL_FOR_CURRPROD,
          payload: err.response,
        });
      });
  };
};
