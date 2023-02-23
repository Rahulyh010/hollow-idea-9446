import React from 'react'
import { Route, Routes } from 'react-router-dom'







import AdminProducts from '../Components/Admin/AdminProducts'

import Admin from '../Pages/Admin'

import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'
//import AdminProducts from '../Components/Admin/AdminProducts'

import { Home } from '../Pages/Home'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />

            
            
   
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            

            <Route path="/admin/*" element={<Admin/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} />

        </Routes>
    </div>
  )
}
