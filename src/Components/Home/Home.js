import React from "react";
import { Link } from "react-router-dom";
import SingleProducts from "../SingleProducts/SingleProducts";
import useData from "../Utility/useData";

const Home = () => {
  const [products] = useData();
  const productsData = products.data;
  console.log(productsData);
  return (
    <div>
      {productsData ? (
        <div>
          <div className="all-products grid gap-5 md:grid-cols-3">
            {productsData.slice(0, 6).map((product) => (
              <SingleProducts
                key={product._id}
                product={product}
              ></SingleProducts>
            ))}
          </div>
          <div className="manage-inventory-btn mt-10 flex justify-center ">
            <div className="div bg-blue-600 p-3 rounded-xl">
              <Link to="/manage-inventory">
                <button>Manage Inventory</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="flex justify-center items-center space-x-2">
            <div
              class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500
      "
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-green-500
      "
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-yellow-500
      "
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
