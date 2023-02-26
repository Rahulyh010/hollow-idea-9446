import React from 'react'
import styled from 'styled-components'

const AddProducts = () => {
  return (
    <MasterDiv style={{ marginTop: "1rem" }}>
      <h2 style={{textAlign:"left",marginLeft:"7rem",paddingTop:"1rem"}}>Add Product <span><img style={{width:"2.5%",marginLeft:"0.5rem",marginTop:"0.3rem"}} src="https://cdn-icons-png.flaticon.com/512/7479/7479717.png" alt="" /></span></h2>
      <div >
      <MainDiv>
        <form action="">
          <label htmlFor="">Product Name <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Product Name' />
          <label htmlFor="">Product Image <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Image url' />
          <label htmlFor="">Product Price <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Product Price' />
          <label htmlFor="">Product Description <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Enter Product Description' />
          <label htmlFor="">Available Stock <span style={{color:"red"}}>*</span></label>
          <input type="text" placeholder='Available stock eg. 200' />
        </form>
        <button>Add Product</button>
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
  width: 70%;
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

