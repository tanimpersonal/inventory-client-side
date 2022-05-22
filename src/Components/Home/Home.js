import React from "react";
import SingleProducts from "../SingleProducts/SingleProducts";
import useData from "../Utility/useData";

const Home = () => {
  const [products] = useData();
  const productsData = products.data;
  console.log(productsData);
  return (
    <div>
      {productsData ? (
        <div className="all-products grid grid-cols-3">
          {productsData.slice(0, 6).map((product) => (
            <SingleProducts
              key={product._id}
              product={product}
            ></SingleProducts>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
