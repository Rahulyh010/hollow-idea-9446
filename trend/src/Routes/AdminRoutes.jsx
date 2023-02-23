import React from 'react'
import { Route, Routes } from 'react-router'
import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminProducts from '../Components/Admin/AdminProducts'
import Admin from '../Pages/Admin'

const AdminRoutes = () => {
  return (
    <div>
        <>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} />
            
        </>
    </div>
  )
}

export default AdminRoutes