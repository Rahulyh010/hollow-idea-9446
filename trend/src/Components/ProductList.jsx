import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux" 
import { getProductData } from '../Redux/ProductReducer/action'
import ProductCard from "./PoductCard"
//import { getProductData } from '../Redux/productReducer/action'

const ProductList = () => {
  const dispatch =useDispatch()
  const products=useSelector((store)=>store.product.products)
  console.log(products)
  useEffect(()=>{
    dispatch(getProductData)
  },[])
  return (

    <div >ProductList
        {products.length>0 && products.map((item)=>{
          return <ProductCard key={item.id} {...item}/>
        })}
    </div>
  )
}

export default ProductList