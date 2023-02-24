import React from 'react'
import { Route, Routes } from 'react-router'
import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminProducts from '../Components/Admin/AdminProducts'
import Login from '../Components/Admin/Login'


const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} />
            <Route path="/Login" element={<Login/>} />
            
        </Routes>
    </div>
  )
}

export default AdminRoutes