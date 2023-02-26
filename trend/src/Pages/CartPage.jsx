import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
 import "./Cart.css"
import { Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';

const CartPage = () => {

  const [cartItems,setCartItems]=useState([])

  const getCartItems=()=>{

    axios.get(`hh`)
    .then((res)=>{
      console.log(res)
      setCartItems([...cartItems,res.data])
    })
    .catch((err)=>{
      console.log(err)
    })
  }

useEffect(()=>{

getCartItems()

},[])

 
 return <div>
<div style={{width:"100%",height:"118px"}} >

</div>
<Navbar />

<div style={{width:"100%",height:"118px"}}>

</div>

<div id="cart-div" >
{cartItems.map((e)=>{
 return <cartItems key={e.id} {...e} />
})}
</div>

 </div>
              
}




export default CartPage;