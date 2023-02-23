import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { Home } from '../Pages/Home'
import ProductList from '../Pages/ProductList'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/productlist" element={<ProductList/>}/>
        </Routes>
    </div>
  )
}
