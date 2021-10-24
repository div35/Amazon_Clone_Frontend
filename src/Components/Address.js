import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "./../store/action/actions";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import OrderConfirmation from "./OrderConfirmation";

const Address = (props) => {
  useEffect(() => {
    if (props.totalValue <= 0 || props.cartProducts.length == 0) {
      props.history.push("/cart");
    }
  }, [props.totalValue, props.history, props.cartProducts]);

  const [address, setAddress] = useState(
    props.address && props.address.address ? props.address.address : " "
  );
  const [city, setCity] = useState(
    props.address && props.address.city ? props.address.city : " "
  );
  const [code, setCode] = useState(
    props.address && props.address.code ? props.address.code : " "
  );
  const [country, setCountry] = useState(
    props.address && props.address.country ? props.address.country : " "
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const finalAddress = {
      address: address,
      city: city,
      code: code,
      country: country,
    };

    props.addAddress(finalAddress);
    props.placeOrder(
      props.user.token,
      props.cartProducts,
      props.address,
      props.totalValue
    );
  };

  return (
    <Container>
      <br />
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <i className="fas fa-arrow-left"></i> Home
      </NavLink>

      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          {props.latestOrderId ? (
            <OrderConfirmation
              id={props.latestOrderId}
              clearLatestOrder={() => {
                props.clear();
              }}
              clearCart={() => {
                props.deleteCart();
              }}
            />
          ) : (
            <>
              <h1 className="text-center my-4">
                Enter Your Shipping Address Here
              </h1>
              <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-4" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="PinCode">
                  <Form.Label>PinCode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter PinCode"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="Country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </Form.Group>
                {props.error ? (
                  <p className="text-center">
                    An Error Occured, Please Try Again Later
                  </p>
                ) : null}
                <Button variant="primary" type="submit" disabled={props.loading}>
                  Place Your Order
                </Button>
                {props.loading ? (
                  <Spinner
                    animation="grow"
                    style={{
                      marginLeft: "4rem",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                ) : null}
              </Form>{" "}
            </>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

const mapStateToProp = (state) => {
  return {
    address: state.cart.address,
    totalValue: state.cart.totalValue,
    cartProducts: state.cart.cartProducts,
    user: state.user.user,
    loading: state.order.loading,
    latestOrderId: state.order.latestOrderId,
    error: state.order.error,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    addAddress: (finalAddress) => dispatch(actions.addAddress(finalAddress)),
    placeOrder: (token, cart, address, totalValue) =>
      dispatch(actions.placeOrder(token, cart, address, totalValue)),
    clear: () => dispatch(actions.clear()),
    deleteCart: () => dispatch(actions.deleteCart()),
  };
};

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(Address));
