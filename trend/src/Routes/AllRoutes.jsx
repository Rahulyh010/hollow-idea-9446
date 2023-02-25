import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Admin from '../Pages/Admin'
import { Home } from '../Pages/Home'
import { LoginSignup } from '../Pages/LoginSignup'

//import ProductList from '../Pages/ProductList'
 Day4_Bhagyesh
import ProductDetailPage from '../Pages/ProductDetailPage'

import Login from '../Components/Admin/Login'
import { useSelector } from 'react-redux'
 main
//import AdminProducts from '../Components/Admin/AdminProducts'








import AdminProducts from '../Components/Admin/AdminProducts'

//import Admin from '../Pages/Admin'
import ProductPage from '../Pages/ProductPage'
import AddProducts from '../Components/Admin/AddProducts'
import AdminDashboard from '../Components/Admin/AdminDashboard'

//import { Home } from '../Pages/Home'
export const AllRoutes = () => {
  const selector = useSelector();
  const auth = useSe

  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>}/>
            
            {/* <Route path="/productlist" element={<ProductList/>}/> */}
           <Route path='/signin' element={<LoginSignup/>}></Route>
           <Route path="/adminLogin" element={<Login/>}/>


            
            


            {/* <Route path="/admin/*" element={<Admin/>}/>
            <Route path="/Dashboard" element={<AdminDashboard/>} />
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            <Route path="/AddProducts" element={<AddProducts/>} /> */}
            Day4_Bhagyesh
            <Route path="productpage" element={<ProductPage/>} />
            <Route path="productpage/id" element={<ProductDetailPage/>} />
            
            <Route path="/AdminProducts" element={<AdminProducts/>} />
            

   
            {/* <Route path="/AdminProducts" element={<AdminProducts/>} />
             */}


        </Routes>
    </div>
  )
}
