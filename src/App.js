import NavHeading from "./Components/NavHeading";
import MainScreen from "./Components/MainScreen";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProdDetail from "./Components/ProdDetail";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Address from "./Components/Address";
import Orders from "./Components/Orders";
function App() {
  return (
    <BrowserRouter>
      <NavHeading />
      <Switch>
        <Route path="/product/:id" component={ProdDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/address" component={Address} />
        <Route path="/orders" component={Orders} />
        <Route path="/" component={MainScreen} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
