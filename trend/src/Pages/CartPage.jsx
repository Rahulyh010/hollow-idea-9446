import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Components/PoductCard";

export const CartPage = () => {
  const [data, setData] = useState([]);
  const products = useSelector((store) => store.product.cart);

  console.log(products);

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
            <p>Product Name : {el.name}</p>
            <p>Brand  : {el.brand}</p>
            <p>Discount Range : <br /> <span>min : {el.discountRange["min"] } & max:{el.discountRange["max"]}</span> </p>
            </div>
          )
        })
      }

    </div>
    <Link to="/checkout">
    <button >CHECKOUT</button>
    </Link>
    
    </>
  );
};
