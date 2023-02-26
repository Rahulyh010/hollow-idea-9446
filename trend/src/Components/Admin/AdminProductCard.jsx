
import React from 'react'
import styled from 'styled-components'

const AdminProductCard = ({ image, description, brand, price, gender, id }) => {



  return (
    <Maindiv style={{ display: "flex" }}>
      <TableRow >

        <tr >
          <td style={{ width: "2%", height: "2rem",background:"grey" }}><p style={{color:"white"}}>{id}</p></td>
          <td style={{ width: "8%", margin: "auto" }} ><img style={{ width: "30%", marginLeft: "-15rem", margin: "auto" }} src={image} alt="" /></td>
          <td style={{ width: "20%", height: "2rem" }}><p style={{ width: "13rem", margin: "auto",height:"1rem", overflow:"hidden",textOverflow:"inherit" }}>{description}</p></td>
          <td style={{ width: "7%", height: "2rem" }}><p>{price}</p></td>
          <td style={{ width: "7%", height: "2rem" }}><p>{brand}</p></td>
          <td style={{ width: "7%", height: "2rem" }}><p>{gender}</p></td>
          <td style={{ width: "5%", height: "2rem" }}><img style={{width:"25%"}} src="https://cdn-icons-png.flaticon.com/512/9807/9807446.png"/></td>
          <td style={{ width: "5%", height: "2rem" }}><img style={{width:"25%"}} src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png"/></td>
        </tr>
      </TableRow>

    </Maindiv>
  )
}

export default AdminProductCard

const Maindiv = styled.div`
  border: 1px solid #D0D0D0;
  & p {
    color:grey
  }
  
  
  /* & tr:nth-child(even) {
    background-color: #c4f7b3;
  } */
  
`
const TableRow = styled.table`
  /* background-color: #69c34a; */
 
  & tr:nth-child(odd){
    /* background-color: #e9ede9; */
  }
 
`

// tr:nth-child(odd){
//   background:#999;}

// tr:nth-child(even){
//   background:#f5f5f5;}