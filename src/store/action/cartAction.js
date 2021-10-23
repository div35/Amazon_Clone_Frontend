import axios from "axios";
import * as actionTypes from "./actionTypes";
const url = "https://ecomm-backend-server.herokuapp.com"

export const addInCart = (id) => {
  return (dispatch, getState) => {
    axios
      .get(`${url}/products/${id}`)
      .then((res) => {
        const data = res.data;
        const newData = {
          name: data.name,
          image: data.image,
          price: data.price,
          Product: data._id,
        };
        dispatch({ type: actionTypes.ADD_IN_CART, payload: newData });
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(getState().cart.cartProducts)
        );
        localStorage.setItem(
          "totalValue",
          JSON.stringify(getState().cart.totalValue)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteFromCart = (id) => {
  return (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.DELETE_FROM_CART, payload: id });
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(getState().cart.cartProducts)
      );
      localStorage.setItem(
        "totalValue",
        JSON.stringify(getState().cart.totalValue)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteCart = () => {
  return (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.DELETE_CART});
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(getState().cart.cartProducts)
      );
      localStorage.setItem(
        "totalValue",
        JSON.stringify(getState().cart.totalValue)
      );
    } catch (err) {
      console.log(err);
    }
  };
};



export const addAddress = (address) => {
  return (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_ADDRESS, payload: address });
      localStorage.setItem("address", JSON.stringify(address));
    } catch (err) {
      console.log(err);
    }
  };
};

