import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "../Pages/Admin";
import { Home } from "../Pages/Home";
import { LoginSignup } from "../Pages/LoginSignup";

//import ProductList from '../Pages/ProductList'

import ProductDetailPage from "../Pages/ProductDetailPage";

import Login from "../Components/Admin/Login";
import { useSelector } from "react-redux";

//import AdminProducts from '../Components/Admin/AdminProducts'

import AdminProducts from "../Components/Admin/AdminProducts";

//import Admin from '../Pages/Admin'
import ProductPage from "../Pages/ProductPage";
import AddProducts from "../Components/Admin/AddProducts";
import AdminDashboard from "../Components/Admin/AdminDashboard";

import Not_Found from "../Pages/Not_Found";
// import Checkout from "../Pages/Checkout";
import { CartPage } from "../Pages/CartPage";
import Checkout1 from "../Pages/checkout1";

import Payment from "../Pages/Payment";


//import { Home } from '../Pages/Home'
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

        {/* <Route path="/productlist" element={<ProductList/>}/> */}
        <Route path="/signin" element={<LoginSignup />}></Route>
        <Route path="/adminLogin" element={<Login />} />

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/productpage/:id" element={<ProductDetailPage />} />

        <Route path="/AdminProducts" element={<AdminProducts />} />

        {/* <Route path="/admin/*" element={<Admin/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} /> */}

        <Route path="productpage" element={<ProductPage />} />
        <Route path="productpage/id" element={<ProductDetailPage />} />

        <Route path="/cartPage" element={<CartPage />} />
        <Route path="*" element={<Not_Found />} />

        {/* <Route path="/AdminProducts" element={<AdminProducts/>} />
         */}

        <Route path="/checkout" element={<Checkout1 />}></Route>
        <Route path="/payment" element={< Payment/>}></Route>
      </Routes>
    </div>
  );
};