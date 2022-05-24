import React from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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
      <div className="product-price-chart">
        <h1 className="text-center my-5 text-4xl">Price Chart</h1>
        <ResponsiveContainer width="50%" aspect={1} height="10%">
          <BarChart
            width={200}
            height={100}
            data={productsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="title" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="product-quantity-chart">
        <h1 className="my-5 text-4xl text-center">Quantity Chart</h1>
        <ResponsiveContainer width="50%" height="100%" aspect={1}>
          <BarChart width={150} height={40} data={productsData}>
            <Bar dataKey="quantity" fill="#8884d8" />
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
