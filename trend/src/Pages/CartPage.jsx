import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Components/PoductCard";

export const CartPage = () => {
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1)
  const products = useSelector((store) => store.product.cart);


  console.log(products);

  let totalPrice = 0;

    data.map((el) => {
      return (totalPrice += el.mrpRange.min*page);
    });

    localStorage.setItem("price", JSON.stringify(totalPrice));
  console.log(totalPrice);

  const getData = async () => {
    try {
      let r = await fetch("https://json-servermock3-pearl.vercel.app/cart");
      let d = await r.json();
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        margin: "auto",
        marginTop: "115px",
      }}
    >
      {
        data?.map((el)=>{
          
          return(
            <div key={el.id}>
            <img src={el.altImagePath} alt="" />
           <h1 style={{fontWeight:"bold",fontSize:"18px"}}>Product Name:<span style={{color:"gray"}}>{el.name}</span></h1>
            <p>Brand  : {el.brand}</p>
            <p>Discount Range : <span>min : {el.discountRange["min"] }</span> </p>
            <h1 style={{fontWeight:"bold",fontSize:"18px"}}>Price : <span style={{color:"gray"}}>{el.mrpRange.min}</span></h1>
            <Button onClick={()=>{setPage(page+1)}} bg={"red"} padding={"0px 0px"}>+</Button>
            <span>{page}</span>
            <Button onClick={()=>{setPage(page-1)}} isDisabled={page===0} bg={"red"}>-</Button>
            </div>
          )
        })
      }
<h1 style={{padding:"4%",background:"green",color:"white",width:"40%",height:"10%"}} >Total Price:{totalPrice}</h1>
    </div>
    <Link to="/checkout">
    <Button bg={"blue.500"} color={"white"}>CHECKOUT</Button>
    </Link>
    
    </>
  );
};
