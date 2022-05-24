import axios from "axios";
import React, { useRef } from "react";

const AddNewProduct = () => {
  const productTitle = useRef("");
  const productPrice = useRef("");
  const productDescription = useRef("");
  const productCategory = useRef("");
  const productImage = useRef("");
  const productQuantity = useRef("");
  const handleAddProduct = (event) => {
    event.preventDefault();
    axios.post("https://assignment-11-tanim.herokuapp.com/products/", {
      title: productTitle.current.value,
      price: productPrice.current.value,
      description: productDescription.current.value,
      category: productCategory.current.value,
      image: productImage.current.value,
      quantity: productQuantity.current.value,
    });
  };
  return (
    <div className="mt-5 ml-5">
      <div className="form">
        <form onSubmit={handleAddProduct}>
          <input
            ref={productTitle}
            type="text"
            name=""
            placeholder="Product Title"
            id=""
          />
          <input
            ref={productPrice}
            type="number"
            placeholder="Price"
            name=""
            id=""
          />
          <input
            ref={productDescription}
            type="text"
            placeholder="Short Description"
            name=""
            id=""
          />
          <input
            ref={productCategory}
            type="text"
            name=""
            placeholder="Category"
            id=""
          />

          <input
            ref={productImage}
            type="text"
            placeholder="Image"
            name=""
            id=""
          />
          <input
            ref={productQuantity}
            type="number"
            placeholder="Quantity"
            name=""
            id=""
          />
          <input type="submit" value="Add New" />
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
