import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { addProduct } from '../../Redux/AdminProductReducer/action';


const initialState = {
  image:"",
  brand:"",
  price:"",
  description:"",
  gender:"male",
}

const AddProducts = () => {
  const [product,setProduct] = useState(initialState);
  // console.log(product)
  const dispatch = useDispatch();

  // const PostedProd = useSelector((store)=>{
  //   console.log(store)
  // })

  
  


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
    setProduct(initialState)
    
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setProduct((prev)=>{
      return {...prev,[name]: name === "price" ? +value : value}
    })
  } 
  
  return (
    <MasterDiv style={{ marginTop: "1rem" }}>
      <h2 style={{textAlign:"left",marginLeft:"7rem",paddingTop:"1rem",fontSize:"25px"}}>Add Product <span></span></h2>
      <div >
      <MainDiv>
        <form onSubmit={(e)=>{
              handleSubmit(e)
            }}>
          <label htmlFor="">Product Name <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Product Name' name='description' value={product.description} onChange={(e)=>handleChange(e)}/>
          <br />
          <label htmlFor="">Product Image <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Image url' name='image' value={product.image} onChange={(e)=>handleChange(e)}/>
          <br />
          <label htmlFor="">Product Price <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Product Price' name='price' value={product.price} onChange={(e)=>handleChange(e)}/>
          <br />
          <label htmlFor="">Brand<span style={{color:"red"}}>*</span></label>
          <br />
          <input type="text" placeholder='Brand Name' name='brand' value={product.brand} onChange={(e)=>handleChange(e)}/>
          <br />
          <label htmlFor="">Gender <span style={{color:"red"}}>*</span></label>
          <br />
          

          <input type='submit' placeholder='male or female or kids' name='gender' value={product.gender} onChange={(e)=>handleChange(e)}/>
          <br />
          <br />
          <button type='submit'>Add Product</button>
        </form>
        
      </MainDiv>
      </div>
      
    </MasterDiv>
  )
}

export default AddProducts

const MasterDiv = styled.div`
    background-color: #def8e3;
    border-radius:2rem;
    width: 95%;
    height: auto;
    margin: auto;
`
const MainDiv = styled.div`
  
  display: flex;
  flex-direction:column;
  background-color: #f2f7ff;
  border: 1px solid blue;
  width: 90%;
  gap: 2rem;
  height: auto;
  /* padding: 8.5rem; */
  padding: 1rem 8.5rem 7rem 5rem;
  margin: auto;
  
  text-align: left;
  column-gap:1rem;
  border-radius: 1rem;
  border: none;

  & label {

  }
  & input {
    width: 90%;
    padding: 1rem;
    border-radius: 1rem;
    border: 7px solid #ebf1f7 ;
    font-family: 'Comfortaa', cursive;
  }
  & textarea:focus, input:focus{
    outline: 2px solid #37a279 ;
}
  & button {
    width: 95%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-weight:bold;
    font-family: 'Comfortaa', cursive;
    font-size:20px;
    color: white;
    background-color: #37a279;
  }
  & button:hover {
    width: 95%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-weight:bold;
    font-family: 'Comfortaa', cursive;
    font-size:20px;
    color: white;
    background-color: #1e8b61;
    cursor: pointer;
  }
`

