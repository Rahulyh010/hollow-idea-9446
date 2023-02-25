import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Admin from '../Pages/Admin'
import { Home } from '../Pages/Home'
import { LoginSignup } from '../Pages/LoginSignup'

//import ProductList from '../Pages/ProductList'








import AdminProducts from '../Components/Admin/AdminProducts'

//import Admin from '../Pages/Admin'

import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import Login from '../Components/Admin/Login'
//import AdminProducts from '../Components/Admin/AdminProducts'

//import { Home } from '../Pages/Home'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>}/>
            
            {/* <Route path="/productlist" element={<ProductList/>}/> */}
           <Route path='/signin' element={<LoginSignup/>}></Route>
           <Route path="/adminLogin" element={<Login/>}/>


            
            
   
            {/* <Route path="/AdminProducts" element={<AdminProducts/>} />
             */}

            {/* <Route path="/admin/*" element={<Admin/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} /> */}

        </Routes>
    </div>
  )
}
