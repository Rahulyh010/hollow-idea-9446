import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const AdminNavbar = () => {
  return (
    <AdminNav>
        <div><h3 style={{marginRight:"45rem",marginLeft:"2rem"}}>Admin Panel</h3></div>
        <div><p>Super Admin</p></div>
        <Link to="/Login"><div><img style={{width:"2rem"}} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" /></div></Link>
    </AdminNav>
  )
}

export default AdminNavbar

const AdminNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 3.5rem;
    background-color: #cdf9d6;
    
    /* margin-top:-19px; */
    /* text-align: center; */
    
    
    
   
`