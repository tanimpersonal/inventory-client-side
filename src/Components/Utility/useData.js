import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://assignment-11-tanim.herokuapp.com/products").then((data) =>
      setProducts(data)
    );
  }, []);
  return [products];
};
export default useData;
