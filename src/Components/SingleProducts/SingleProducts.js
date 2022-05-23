import React from "react";

const SingleProducts = ({ product }) => {
  return (
    <div>
      <div className="product p-5 shadow-2xl">
        <div className="image w-full">
          <img className="w-full" src={product.image} alt="" />
        </div>
        <div className="details-text">
          <p>{product.title}</p>
          <small>Category: {product.category}</small>
          <h4>Price: ${product.price}</h4>
          <p>{product.description}</p>
          <div className="btn">
            <button className="bg-blue-500 p-2 rounded-lg">
              Update Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
