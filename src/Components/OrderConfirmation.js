import React, { useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
const OrderConfirmation = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.clearLatestOrder();
      props.history.push("/");
      props.clearCart();
    }, 5000);
  });
  return (
    <Row className="my-5">
      <Col md={2} xs={0}></Col>
      <Col
        md={8}
        xs={12}
        style={{
          borderRadius: "2rem",
          backgroundColor: "white",
          boxShadow:
            "inset 0 -3em 3em rgba(0,0,0,0.1) ,0 0  0 2px rgb(255,255,255),  0.3em 0.3em 1em rgba(0,0,0,0.3)",
        }}
      >
        <Row>
          <Image
            src="/images/orderSuccess.gif"
            style={{ borderRadius: "2rem" }}
            fluid
          />
        </Row>
        <div style={{ color: "green" }} className="text-center">
          Congratulations!!! Your Order is Confirmed
        </div>
        <div style={{ color: "green" }} className="text-center">
          <strong>Your Order Id : {props.id}</strong>
        </div>
      </Col>
      <Col md={2} xs={0}></Col>
    </Row>
  );
};

export default withRouter(OrderConfirmation);
