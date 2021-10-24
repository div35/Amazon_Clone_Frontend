import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import SpinnerBar from "./SpinnerBar";
import * as actions from "./../store/action/actions";
import { NavLink } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (props.user) {
      props.history.push("/");
    }
  }, [props.user, props.history]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    props.signup(name, email, password);
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1 className="text-center ">Sign Up</h1>
      {props.error ? (
        <p className="text-center" style={{ color: "red" }}>
          User Already Available
        </p>
      ) : null}
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <Form onSubmit={submitFormHandler}>
            <Form.Group className="mx-5 mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
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
              Sign up
            </Button>
            <p className="mx-5 my-3">
              Already Registered ?{" "}
              <NavLink
                to="/login"
                style={{ color: "red", textDecoration: "none" }}
              >
                Login
              </NavLink>{" "}
              Here
            </p>
            {props.loading ? <SpinnerBar /> : null}
          </Form>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
    </div>
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
    signup: (name, email, password) =>
      dispatch(actions.signup(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
