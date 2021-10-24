import React from "react";

const Rating = ({ rating, reviews }) => {
  return (
    <div style={{ color: "#007185", display: "flex" }}>
      <div style={{ color: "orange" }}>
        <i
          class={
            rating >= 1
              ? "fas fa-star"
              : rating >= 0.5
              ? "fas fa-star-half"
              : "null"
          }
        ></i>
        <i
          class={
            rating >= 2
              ? "fas fa-star"
              : rating >= 1.5
              ? "fas fa-star-half"
              : "null"
          }
        ></i>
        <i
          class={
            rating >= 3
              ? "fas fa-star"
              : rating >= 2.5
              ? "fas fa-star-half"
              : "null"
          }
        ></i>
        <i
          class={
            rating >= 4
              ? "fas fa-star"
              : rating >= 3.5
              ? "fas fa-star-half"
              : "null"
          }
        ></i>
        <i
          class={
            rating >= 5
              ? "fas fa-star"
              : rating >= 4.5
              ? "fas fa-star-half"
              : "null"
          }
        ></i>
      </div>
      &nbsp;
      {reviews} reviews
    </div>
  );
};

export default Rating;
