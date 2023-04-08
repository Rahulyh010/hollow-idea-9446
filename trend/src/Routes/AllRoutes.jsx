import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "../Pages/Admin";
import { Home } from "../Pages/Home";
import { LoginSignup } from "../Pages/LoginSignup";

import ProductDetailPage from "../Pages/ProductDetailPage";

import Login from "../Components/Admin/Login";

import AdminProducts from "../Components/Admin/AdminProducts";

import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import Not_Found from "../Pages/Not_Found";
import Checkout from "../Pages/Checkout";

import AdminDashboard from '../Components/Admin/AdminDashboard'


export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/signin" element={<LoginSignup />}></Route>
        <Route path="/adminLogin" element={<Login />} />

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/productpage/:id" element={<ProductDetailPage />} />

        <Route path="/AdminProducts" element={<AdminProducts />} />

        <Route path="/cartPage" element={<CartPage />} />
        <Route path="*" element={<Not_Found />} />

        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};
