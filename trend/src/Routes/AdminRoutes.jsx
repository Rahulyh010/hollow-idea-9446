import React from 'react'
import { Route, Routes } from 'react-router'
import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminProducts from '../Components/Admin/AdminProducts'
import AllProducts from '../Components/Admin/AllProducts'
import Login from '../Components/Admin/Login'
import PrivateRoutes from '../Components/Admin/PrivateRoutes'

import Admin from '../Pages/Admin'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Dashboard" element={<AdminDashboard />} />
        <Route path="/AdminProducts" element={<PrivateRoutes><AdminProducts /></PrivateRoutes>} />
        <Route path="/AddProducts" element={<PrivateRoutes><AddProducts /></PrivateRoutes>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AdminRoutes