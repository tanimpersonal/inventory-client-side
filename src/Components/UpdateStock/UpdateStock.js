import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateStock = () => {
  const params = useParams();
  console.log(params);
  const _id = params.id;
  const [product, setProduct] = useState({});

  const getUpdate = () => {
    axios(`http://localhost:5000/products/${_id}`).then((data) =>
      setProduct(data)
    );
  };
  useEffect(() => {
    getUpdate();
  }, []);
  const singleProduct = product.data;
  console.log(singleProduct);
  const handleQuantity = async (event) => {
    event.preventDefault();
    const quantity = singleProduct.quantity;
    const newQuantity = quantity - 1;
    console.log(newQuantity);
    await axios.put(`http://localhost:5000/products/${_id}`, {
      quantity: `${newQuantity}`,
    });

    getUpdate();
  };
  const newQuantity = useRef("");
  const handleRestock = async (event) => {
    event.preventDefault();
    const updateQuantity = newQuantity.current.value;
    await axios.put(`http://localhost:5000/products/${_id}`, {
      quantity: `${updateQuantity}`,
    });
    getUpdate();
  };
  return (
    <div>
      {singleProduct ? (
        <div className="mt-5">
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img class="rounded-t-lg" src={singleProduct.image} alt="" />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {singleProduct.title}
                </h5>
                <small class="text-gray-700 text-base mb-4">
                  Category: {singleProduct.category}
                </small>
                <p class="text-gray-700 text-base mb-4">
                  {singleProduct.description}
                </p>
                <p class="text-blue-600 text-base mb-4">
                  Available Quantity: {singleProduct.quantity}
                </p>
                <button
                  onClick={handleQuantity}
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>
          <div className="h1">Restock The Item: </div>
          <div className="form">
            <form onSubmit={handleRestock}>
              <input ref={newQuantity} type="number" name="" id="" />
              <input type="submit" value="Restock" />
            </form>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default UpdateStock;
