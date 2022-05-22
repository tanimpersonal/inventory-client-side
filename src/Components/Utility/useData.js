import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/products").then((data) => setProducts(data));
  }, []);
  return [products];
};
export default useData;
