//import { background } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const ProductCard = ({name,brand,imagePath,mrpRange,discountRange,id}) => {
    
  return (
    <Link to={`/productpage/${id}`}>
    <Maindiv>
      <div style={{width:"100%",margin:"auto", }}>
                  <img style={{
                    width:"90%",
                    height:"290px"
                  }}  src={imagePath} alt={name} />
      </div>
      <div style={{ padding:"-5px"}}>
        <h5 style={{color:"brown",margin:"1rem"}}>{brand}</h5>
        <p style={{fontSize:"0.8rem",margin:"-1px"}}>{name}</p>
        <div style={{display:"inline-flex",
                      gap:"5px",
                      textAlign:"center"}}>
        <h4 style={{fontSize:"0.8rem",marginTop:"-8px"}}>Rs. {mrpRange.min}</h4>
          <p style={{fontSize:"0.7rem",
                      textDecorationLine:"line-through",
                      marginTop:"-5px"}}>Rs.{Math.round((mrpRange.min)+((mrpRange.min)*(discountRange.max)/100))}</p>
          <p style={{color:"brown",
                    fontSize:"0.8rem",
                    marginTop:"-8px"}}>
                      ({discountRange.max}%off)
          </p>
        </div>
          
        <h5 style={{color:"green",marginTop:"-5px",fontSize:"10px"}}>Offer price Rs.{mrpRange.min}</h5>
      </div>
        
    </Maindiv>
    </Link>
  )
}

export default ProductCard

const Maindiv = styled.div`
    margin:10px ;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    display:grid;
    grid-templete-rows:(65%,35%)
    
    
    `