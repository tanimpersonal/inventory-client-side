import React from "react";
import useData from "../Utility/useData";

const Home = () => {
  const [products] = useData();
  console.log(products);
  return (
    <div>
      <div className="all-products"></div>
    </div>
  );
};

export default Home;
