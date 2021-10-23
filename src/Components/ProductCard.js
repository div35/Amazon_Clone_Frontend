import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Row className="my-3 border py-2">
      <Col md="3" className="mx-4">
        <NavLink to={`/product/${product._id}`}>
          <Image
            className="rounded"
            style={{ height: "250px" }}
            src={product.image}
            fluid
          ></Image>
        </NavLink>
      </Col>
      <Col md="6" className="my-5">
        <Row>
          <NavLink
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <h3>{product.name}</h3>
          </NavLink>
        </Row>
        <Row>
          <Rating rating={product.rating} reviews={product.numReviews} />
        </Row>
        <Row className="py-2">
          &nbsp;&nbsp; Price:{" "}
          <Col className="px-2" style={{ color: "#B12704" }}>
            ${product.price}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductCard;
