import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/products").then((data) => setProducts(data));
  }, []);
  console.log(products);
  return <div></div>;
};

export default ManageInventory;
