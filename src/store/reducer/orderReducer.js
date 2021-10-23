import * as actionTypes from "./../action/actionTypes";

let initialState = {
  pastOrders: [],
  latestOrderId: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.CLEAR_LATEST_ORDER_ID:
      return {
        ...state,
        latestOrderId: null,
      };
    case actionTypes.REQUEST_FOR_ORDER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUCCESS_FOR_ORDER:
      return {
        ...state,
        loading: false,
        pastOrders: [...state.pastOrders, actions.payload],
        latestOrderId: actions.payload._id,
      };
    case actionTypes.FAIL_FOR_ORDER:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    case actionTypes.REQUEST_ALL_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SUCCESS_ALL_ORDERS:
      return {
        ...state,
        loading: false,
        pastOrders: actions.payload,
      };
    case actionTypes.FAIL_ALL_ORDERS:
      return {
        ...state,
        loading: false,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default reducer;
