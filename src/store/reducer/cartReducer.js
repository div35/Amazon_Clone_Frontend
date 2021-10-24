import * as actionTypes from "./../action/actionTypes";

let initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  totalValue: parseInt(localStorage.getItem("totalValue"))
    ? parseInt(localStorage.getItem("totalValue"))
    : 0,
  address: localStorage.getItem("address")
    ? JSON.parse(localStorage.getItem("address"))
    : null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_IN_CART:
      const isExist = state.cartProducts.find(
        (p) => p.Product === action.payload.Product
      );
      if (isExist)
        return {
          ...state,
        };
      else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
          totalValue: state.totalValue + action.payload.price,
        };
      }
    case actionTypes.DELETE_FROM_CART:
      const newCart = state.cartProducts.filter(
        (p) => p.Product != action.payload
      );
      const price = state.cartProducts.find(
        (p) => p.Product == action.payload
      ).price;
      return {
        ...state,
        totalValue: state.totalValue - price,
        cartProducts: newCart,
      };
    case actionTypes.DELETE_CART:
      return {
        ...state,
        totalValue: 0,
        cartProducts: [],
      };
    case actionTypes.ADD_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
