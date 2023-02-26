import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import AdminProductCard from './AdminProductCard'
import AdminProductsList from './AdminProductsList'

const AllProducts = () => {
  const navigate = useNavigate()
  return (
    <div>
      <PageDiv style={{ display: "flex", width: "90%" }}>
        <div><h2 style={{ textAlign: "left", marginLeft: "4rem" }}>All Products</h2></div>
        <div>
          <button onClick={()=>navigate("/AddProducts")}>Add New Product</button>
        </div>
      </PageDiv>


      <Table>
        <tr >
          <th style={{ width: "2%" }}>#</th>
          <th style={{ width: "8%" }}>Image</th>
          <th style={{ width: "20%" }}>TiTle</th>
          <th style={{ width: "7%" }}>Price</th>
          <th style={{ width: "7%" }}>Brand</th>
          <th style={{ width: "7%" }}>Gender</th>
          <th style={{ width: "5%" }}>Edit</th>
          <th style={{ width: "5%" }}>Delete</th>
        </tr>
      </Table>
      <AdminProductsList />
    </div>
  )
}

export default AllProducts

const PageDiv = styled.div`
  
  margin: auto;
  align-items: center;
  display: grid;
  justify-content:space-evenly;
  gap: 50%;
  margin-bottom: 2rem;
  margin-top:2rem;
  & button {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-weight:bold;
    font-family: 'Comfortaa', cursive;
    font-size:15px;
    color: white;
    background-color: #1d9969;
    cursor: pointer;

  }
  & button:hover {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-weight:bold;
    font-family: 'Comfortaa', cursive;
    font-size:15px;
    color: white;
    background-color: #1e8b61;
    cursor: pointer;

  }
`

const Table = styled.table`
  width: 90%;
  margin: auto;
  border: 1px solid grey;
  padding-top:1rem;
  padding-bottom:1rem;
  margin-bottom:0.5rem;
`