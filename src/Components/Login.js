import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import SpinnerBar from "./SpinnerBar";
import * as actions from "./../store/action/actions";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.user) {
      props.history.push("/");
    }
  }, [props.user, props.history]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  return (
    <Container style={{ margin: "2rem" }}>
      <h1 className="text-center ">Log In</h1>
      {props.error ? (
        <p className="text-center" style={{ color: "red" }}>
          Invalid Email or Password
        </p>
      ) : null}
      <Row>
        <Col></Col>
        <Col xs={12} md={6}>
          <Form onSubmit={submitFormHandler}>
            <Form.Group className="mx-5 mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button className="mx-5 " variant="primary" type="submit">
              Login
            </Button>
            <p className="mx-5 my-3">
              Not Registered ?{" "}
              <NavLink
                to="/signup"
                style={{ color: "red", textDecoration: "none" }}
              >
                Signup
              </NavLink>{" "}
              Here
            </p>
            {props.loading ? <SpinnerBar /> : null}
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
