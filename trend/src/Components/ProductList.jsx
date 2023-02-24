import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux" 
//import styled from 'styled-components'
import { getProductData } from '../Redux/ProductReducer/action'
import ProductCard from "./PoductCard"


const ProductList = () => {
  const dispatch =useDispatch()
  const products=useSelector((store)=>store.product.products)
  console.log(products)
  useEffect(()=>{
    dispatch(getProductData)
  },[])
  return (
    <div style={{justifyContent:"right"}}>
      <h1>ProductPage</h1>
        <div style={{
          width:"95%",
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          margin:"auto"
        }} >
            {products.length>0 && products.map((item)=>{
              return <ProductCard key={item.id} {...item}/>
            })}
        </div>
    </div>
  )
}

export default ProductList

