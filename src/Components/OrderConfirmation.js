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
    <Container
      style={{
        position: "fixed",
        top: "30%",
        left: "33%",
        borderRadius: "2rem",
        width: "30%",
        height: "50%",
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
        Congratulations!!! You Order is Confirmed
      </div>
      <div style={{ color: "green" }} className="text-center">
        <strong>Your Order Id : {props.id}</strong>
      </div>
    </Container>
  );
};

export default withRouter(OrderConfirmation);
