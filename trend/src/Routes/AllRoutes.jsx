import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { Home } from '../Pages/Home'
import ProductPage from '../Pages/ProductPage'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="productpage" element={<ProductPage/>}/>
        </Routes>
    </div>
  )
}
