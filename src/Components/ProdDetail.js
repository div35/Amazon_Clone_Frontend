import React, { useState, useEffect } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";
import SpinnerBar from "./SpinnerBar";
import { connect } from "react-redux";
import * as actions from "./../store/action/actions";

const ProdDetail = (props) => {
  useEffect(async () => {
    props.getCurrProd(props.match.params.id);
  }, [props.match]);

  const addToCartHandler = () => {
    props.addInCart(props.match.params.id);
    props.history.push(`/cart`);
  };

  return (
    <div>
      {props.error ? (
        <p className="text-center" style={{ color: "red" }}>
          Product ID is Invalid!!!
        </p>
      ) : props.loading ? (
        <SpinnerBar />
      ) : props.currProd ? (
        <Row className="m-4">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <i className="fas fa-arrow-left"></i> Back
          </NavLink>
          <h1 className="text-center" style={{ marginBottom: "3rem" }}>
            About Product
          </h1>
          <Col></Col>
          <Col md={5}>
            <Image className=" rounded" src={props.currProd.image} fluid />
          </Col>
          <Col></Col>
          <Col md={5} className="px-4">
            <Row>
              <h3>{props.currProd.name}</h3>
            </Row>
            <Row>
              <Rating
                rating={props.currProd.rating}
                reviews={props.currProd.numReviews}
              />
            </Row>
            <Row className="border-top py-2">
              Price:{" "}
              <Col className="px-2" style={{ color: "#B12704" }}>
                ${props.currProd.price}
              </Col>
            </Row>
            <Row className="border-top border-bottom py-2">
              {props.currProd.description}
            </Row>
            <Row className="my-4">
              <Col>
                {props.currProd.countInStock > 0 ? (
                  <div
                    className="text-center"
                    style={{
                      color: "green",
                      fontWeight: "900",
                      fontSize: "20px",
                    }}
                  >
                    In Stock
                  </div>
                ) : (
                  <div
                    className="text-center"
                    style={{
                      color: "red",
                      fontWeight: "900",
                      fontSize: "20px",
                    }}
                  >
                    Out Of Stock
                  </div>
                )}
              </Col>
            </Row>
            <Row className="my-4">
              <div className="text-center">
                Quantity : {props.currProd.countInStock}
              </div>
            </Row>
            <Row>
              <Button
                className="btn-block"
                type="button"
                onClick={addToCartHandler}
                disabled={props.currProd.countInStock > 0 ? false : true}
              >
                Add To Cart
              </Button>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      ) : (
        <h1 className="text-center">Product Details are Not Available</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currProd: state.product.currProd,
    loading: state.product.loading,
    error: state.product.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrProd: (id) => dispatch(actions.getCurrProd(id)),
    addInCart: (id) => dispatch(actions.addInCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdDetail);
