import axios from "axios";
import * as actionTypes from "./actionTypes";

export const placeOrder = (token, cart, address, totalValue) => {
  return (dispatch) => {
    try {
      dispatch({ type: actionTypes.REQUEST_FOR_ORDER });
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      axios
        .post("/order/placeOrder", { cart, address, totalValue }, config)
        .then((res) => {
          let data = res.data;
          //   console.log(data);
          dispatch({
            type: actionTypes.SUCCESS_FOR_ORDER,
            payload: data,
          });
        })
        .catch((err) =>
          dispatch({
            type: actionTypes.FAIL_FOR_ORDER,
            payload: err.response,
          })
        );
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllOrder = (token) => {
  return (dispatch) => {
    try {
      dispatch({ type: actionTypes.REQUEST_ALL_ORDERS });
      const config = {
        headers: { authorization: `Bearer ${token}` },
      };
      axios
        .get("/order/getAllOrders", config)
        .then((res) => {
          let data = res.data;
          console.log(data);
          dispatch({
            type: actionTypes.SUCCESS_ALL_ORDERS,
            payload: data,
          });
        })
        .catch((err) =>
          dispatch({
            type: actionTypes.FAIL_ALL_ORDERS,
            payload: err.response,
          })
        );
    } catch (err) {
      console.log(err);
    }
  };
};

export const clear = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_LATEST_ORDER_ID });
  };
};
