import React from 'react'
import { Navbar } from '../Components/Navbar'
//import styled from 'styled-components'
import ProductList from '../Components/ProductList'
import SideBarProduct from '../Components/SideBarProduct'

const ProductPage = () => {
  return (
   <>
   <div style={{height:"115px"}} >

   </div>
    <Navbar/>
    <div style={{display:"flex", 
                width:"85%",
                margin:"auto",
                gap:"7px",marginTop:"15px"}}>
      <div>
        <SideBarProduct/>
      </div>
      <div style={{}}>
        <ProductList/>
      </div>
    </div>
    <footer/>
    </>
  )
}

export default ProductPage


