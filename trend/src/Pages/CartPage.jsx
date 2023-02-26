import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
 import "./Cart.css"

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setCart(data);
      setTotalPrice(data.reduce((acc, item) => acc + (item.quantity * item.price), 0));
    };
    fetchCart();
  }, []);

  const handleQuantityChange = (event, itemId) => {
    const newCart = cart.map(item => {
      if (item.id === itemId) {
        item.quantity = parseInt(event.target.value);
      }
      return item;
    });
    setCart(newCart);
    setTotalPrice(newCart.reduce((acc, item) => acc + (item.quantity * item.price), 0));
  };

  const handleRemoveFromCart = (itemId) => {
    const newCart = cart.filter(item => item.id !== itemId);
    setCart(newCart);
    setTotalPrice(newCart.reduce((acc, item) => acc + (item.quantity * item.price), 0));
  };

  return (
    <div className="cart-page">
      <div>

      </div>
      <div>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />
      </div>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items" >
            {cart.map(item => (
              <div key={item.id} style={{border: "1px solid",padding:"20px"}}>
                <img style={{width:"50px"}}src={item.image} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  <div className="quantity">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input type="number" id={`quantity-${item.id}`} name={`quantity-${item.id}`} min="1" value={item.quantity} onChange={(e) => handleQuantityChange(e, item.id)} />
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </ul>
          <p className="total-price">Total Price: {totalPrice}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
      <div>
      <Button>ADD FROM WHISLIST</Button>
      </div>
     <div style={{color:'blue',marginTop:'20px',fontWeight:'bold'}} >
      CONTINUE SHOPPING
     </div>
     <div>
      
     </div>
      
    </div>
  );
};


const Button=styled.button`
width:180px;
height:50px;
border-radius:10px;
background-color:orange
`





export default CartPage;