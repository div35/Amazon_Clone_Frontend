import React, { useState, useEffect } from "react";
import * as actions from "./../store/action/actions";
import { connect } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SpinnerBar from "./SpinnerBar";
const MainScreen = (props) => {
  useEffect(async () => {
    props.getAllProducts();
  }, []);
  return (
    <Container>
      <br />
      <h1 className="text-center">Available Products</h1>
      <br />
      {props.loading ? (
        <SpinnerBar />
      ) : props.Products == [] ? (
        <h4 className="text-center">Product are Not Available</h4>
      ) : (
        <Row>
          <Col md={1} xs={0}></Col>
          <Col>
            {props.Products.map((product) => (
              <Row key={product._id}>
                <ProductCard product={product} />
              </Row>
            ))}
          </Col>
          <Col md={1} xs={0}></Col>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    Products: state.product.products,
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(actions.getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
