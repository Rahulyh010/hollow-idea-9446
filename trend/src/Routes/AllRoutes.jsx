import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProducts from '../Components/Admin/AdminProducts'
import { Home } from '../Pages/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            
        </Routes>
    </div>
  )
}
