import * as actionTypes from "./../action/actionTypes";

let initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case actionTypes.SIGNUP_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
