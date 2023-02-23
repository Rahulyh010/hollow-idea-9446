import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { Home } from '../Pages/Home'



export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </div>
  )
}
