import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "./../store/action/actions";
import SpinnerBar from "./SpinnerBar";
import { NavLink } from "react-router-dom";

const Orders = (props) => {
  useEffect(() => {
    if (props.user == null) {
      props.history.push("/login");
    } else {
      props.getAllOrder(props.user.token);
    }
  }, [props.history]);

  const Elem = props.pastOrders.map((order) => {
    return (
      <Row className="border rounded p-3" key={order._id}>
        <Col className="mx-3" md={3}>
          <Row className="text-center" style={{ color: "#B12704" }}>
            <strong>Order ID:</strong>
          </Row>
          <Row className="text-center">
            <strong>{order._id}</strong>
          </Row>
          <br />
          <Row className="text-center" style={{ color: "#B12704" }}>
            <strong>Shipping Address:</strong>
          </Row>
          <Row className="text-center">
            <strong>
              {order.address.address}, {order.address.city},
            </strong>
          </Row>
          <Row className="text-center">
            <strong>
              {order.address.code}, {order.address.country}
            </strong>
          </Row>
        </Col>
        <Col md={5}>
          {order.orderItems.map((item) => (
            <Row className="my-2 border rounded p-1" key={item.Product}>
              <Col md={2}>
                <Image src={item.image} fluid></Image>
              </Col>
              <Col md={9}>
                <Row>
                  <strong>{item.name}</strong>
                </Row>
                <Row>
                  <div style={{ display: "flex" }}>
                    Price:{" "}
                    <Col className="px-2" style={{ color: "#B12704" }}>
                      ${item.price}
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={3}>
          <Row className=" m-3">
            <Col></Col>
            <Col>
              <h4>Total:</h4>
            </Col>
            <Col>
              <h4 style={{ color: "#B12704" }}>${order.totalValue}</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  });
  return (
    <Container>
      <br />
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <i className="fas fa-arrow-left"></i> Back
      </NavLink>
      {props.loading ? (
        <SpinnerBar />
      ) : (
        <Container>
          <h1 className="text-center">Orders</h1>
          <Row>
            <Col md={1} xs={0}></Col>
            <Col>
              {props.pastOrders.length == 0 ? (
                <h4 className="text-center my-5">
                  You Have Not Placed Any Orders Yet
                </h4>
              ) : (
                Elem
              )}
            </Col>
            <Col md={1} xs={0}></Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    pastOrders: state.order.pastOrders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrder: (token) => dispatch(actions.getAllOrder(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
