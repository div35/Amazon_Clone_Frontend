import React from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import * as actions from "./../store/action/actions";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  const deletefromCartHandler = (id) => {
    props.deleteFromCart(id);
  };
  const checkoutHandler = () => {
    if (props.user) props.history.push("/address");
    else props.history.push("/login");
  };
  var elem =
    props.cartProducts.length === 0 ? (
      <h4 className="text-center my-4"> Your Cart is Empty </h4>
    ) : (
      props.cartProducts.map((p) => {
        return (
          <Row key={p.Product} className="rounded border-bottom my-2 p-2">
            <Col md={4}>
              <Image className="rounded" src={p.image} fluid></Image>
            </Col>
            <Col className="d-flex align-items-center">
              <Row>
                <h5 className="text-center my-1">{p.name}</h5>
                <h6 className="text-center my-1">
                  Price:{" "}
                  <strong style={{ color: "#B12704" }}>${p.price}</strong>
                </h6>
                <Button
                  style={{ width: "max-content", margin: "auto" }}
                  className="btn-danger my-1"
                  type="button"
                  onClick={deletefromCartHandler.bind(this, p.Product)}
                >
                  Delete From Cart
                </Button>
              </Row>
            </Col>
          </Row>
        );
      })
    );
  return (
    <Container>
      <br />
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <i className="fas fa-arrow-left"></i> Home
      </NavLink>
      <Row>
        <h1 className="text-center">Cart Items</h1>
      </Row>
      <Container style={{ padding: "0px 30%" }}>
        {elem}
        <Row className="my-2">
          <Col className="my-4">
            <strong>Subtotal: </strong>
          </Col>
          <Col></Col>
          <Col className="my-4">
            <strong style={{ color: "#B12704" }}>${props.totalValue}</strong>
          </Col>
        </Row>
        <Row>
          <Button
            style={{ width: "max-content", margin: "auto" }}
            className="btn-pr my-4"
            type="button"
            onClick={checkoutHandler}
            disabled={
              props.totalValue == 0 || props.cartProducts.length == 0
                ? true
                : false
            }
          >
            {props.user ? "Proceed To Checkout" : "Login To Place Order"}
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts,
    totalValue: state.cart.totalValue,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => dispatch(actions.deleteFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
