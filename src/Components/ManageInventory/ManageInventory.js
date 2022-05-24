import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../Table/Table";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/products").then((data) =>
      setProducts(data.data)
    );
  }, []);
  console.log(products);
  //   const allProducts = products.data;
  //   console.log(allProducts);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount > 0) {
        const remaining = products.filter((product) => product._id !== id);
        setProducts(remaining);
      }
    });
  };
  //   console.log(allProducts);
  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6">
          <div class="py-2 inline-block w-100 sm:px-6">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Title
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <tr key={product._id} class="border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        {product.title}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        {product.description}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                        <button onClick={() => handleDelete(product?._id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="add-item flex justify-center mt-5">
        <div className="btn p-5 rounded-2xl bg-blue-500">
          <Link to="/add-new">
            <button>Add New Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
