import React from 'react'
import styled from 'styled-components'


const AdminNavbar = () => {
  return (
    <AdminNav>
        <div><h3 style={{marginRight:"45rem"}}>Admin Panel</h3></div>
        <div><p style={{marginRight:"-22rem"}}>Super Admin</p></div>
        <div><img style={{width:"2rem",marginLeft:"15rem"}} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" /></div>
    </AdminNav>
  )
}

export default AdminNavbar

const AdminNav = styled.div`
    width: 80%;
    display: flex;
    height: 3.5rem;
    background-color:white;
    
    /* margin-top:-19px; */
    /* text-align: center; */
    margin-left:18.8rem;
    justify-content:center;
    align-items:center;
    
   
`