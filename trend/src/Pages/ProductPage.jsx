import React from 'react'
//import styled from 'styled-components'
import ProductList from '../Components/ProductList'
import SideBarProduct from '../Components/SideBarProduct'

const ProductPage = () => {
  return (
   

    <div style={{display:"flex", width:"90%"}}>
      <div><SideBarProduct/></div>
      <div><ProductList/></div>
      
         
    </div>
  )
}

export default ProductPage


