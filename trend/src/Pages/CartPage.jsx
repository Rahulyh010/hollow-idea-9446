import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/PoductCard'

export const CartPage = () => {
  const products=useSelector((store)=>store.product.cart)

  console.log(products)

  return (
    <div>


<div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          margin:"auto",marginTop:"115px"
        }} >
          
            {products.length>0 && products.map((item)=>{
              return <ProductCard key={item.id+item.title} {...item} 
              />
            })}
            
        </div>

      <Link to="/checkout" >
      <Button>ChekOut</Button>
      </Link>
        
    </div>
  )
}
