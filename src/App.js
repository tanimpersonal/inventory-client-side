import { Route, Routes } from "react-router-dom";
import "tw-elements";
import AddNewProduct from "./Components/AddNewProduct/AddNewProduct";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import UpdateStock from "./Components/UpdateStock/UpdateStock";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/updatestock/:id"
          element={
            <RequireAuth>
              <UpdateStock></UpdateStock>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/add-new"
          element={<AddNewProduct></AddNewProduct>}
        ></Route>
        <Route
          path="/manage-inventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
