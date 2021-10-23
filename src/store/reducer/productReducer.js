import * as actionTypes from "./../action/actionTypes";

let initialState = {
  products: [],
  currProd: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FOR_ALLPRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
        products: [],
      };
    case actionTypes.SUCCESS_FOR_ALLPRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case actionTypes.FAIL_FOR_ALLPRODUCTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    case actionTypes.REQUEST_FOR_CURRPROD:
      return {
        ...state,
        loading: true,
        error: null,
        currProd: null,
      };
    case actionTypes.SUCCESS_FOR_CURRPROD:
      return {
        ...state,
        loading: false,
        currProd: action.payload,
        error: null,
      };
    case actionTypes.FAIL_FOR_CURRPROD:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currProd: [],
      };
    default:
      return state;
  }
};

export default reducer;
