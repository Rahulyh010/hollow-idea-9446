import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux" 
//import styled from 'styled-components'
import { getProductData } from '../Redux/ProductReducer/action'
import ProductCard from "./PoductCard"
//import SideBarProduct from './SideBarProduct'


const ProductList = () => {
  const dispatch =useDispatch()
  const products=useSelector((store)=>store.product.products)
  //console.log(products)
  
  useEffect(()=>{
    dispatch(getProductData)
  },[])
  return (
    <div style={{justifyContent:"right"}}>
        <h1 style={{margin:"30px",fontFamily:"SourceSansPro"}}>Flat 50 Percent Off</h1>
        <div style={{display:"grid",boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                     backgroundColor:"rgb(245,245,245)",
                     gridTemplateColumns:"repeat(3,1fr)",
                     alignItems:"center",height:"80px",fontSize:"13px"
                    }}>
          <div style={{
                      display:"inline-flex",fontWeight:"bold",
                      justifyContent:"left",
                      margin:"15px"}} >{products.length}  Items Found</div>
          <div style={{margin:"15px",gap:"5px",
                           display:"inline-flex",
                           justifyContent:"left",
                           alignItems:"center"
                     }}>GRID  
                <div style={{border:"1px solid",
                           height:"20px",width:"45%",
                          
                     }}></div>
          </div>
          <div style={{margin:"15px",gap:"5px",
                           display:"inline-flex",
                           justifyContent:"left",
                           alignItems:"center",fontSize:"13px"
                     }}>SORT BY
                      <select style={{
                      height:"20px",width:"55%",}}
                       defaultValue="Relevence"
                       >
                        <option value="">Relevence</option>
                        <option value="">Price(Lowest First)</option>
                        <option value="">Price(Highest First)</option>
                        <option value="">Discount</option>
                        <option value="">What's New</option>
                      </select>
                     
          </div>
          
        </div>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          margin:"auto",marginTop:"25px"
        }} >
          
            {products.length>0 && products.map((item)=>{
              return <ProductCard key={item.id} {...item} 
              />
            })}
            
        </div>
    </div>
  )
}

export default ProductList

