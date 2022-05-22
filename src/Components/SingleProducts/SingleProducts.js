import React from "react";

const SingleProducts = ({ product }) => {
  return (
    <div>
      <div className="product">
        <div className="image">
          <img src={product.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
