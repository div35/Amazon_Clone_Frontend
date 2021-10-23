import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import productReducer from "./store/reducer/productReducer";
import cartReducer from "./store/reducer/cartReducer";
import userReducer from "./store/reducer/userReducer";
import orderReducer from "./store/reducer/orderReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
