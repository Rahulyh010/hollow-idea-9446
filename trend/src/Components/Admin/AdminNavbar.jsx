import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const AdminNavbar = () => {
  return (
   
    <AdminNav>
        <div><h3 style={{marginRight:"45rem",marginLeft:"2rem"}}>Admin Panel</h3></div>
        <div><p>Super Admin</p></div>
        <Dropdown><Logout><Link to="/Login"><div><img style={{width:"2rem"}} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" /></div></Link></Logout>
        <DropCont>
        <p>Hello World!</p>
        </DropCont>
        </Dropdown>
    </AdminNav>
    
  )
}

export default AdminNavbar

const Logout = styled.span`
  
`
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    display: block;
  }
`
const DropCont = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  &:hover {
    display: block;
  }

`

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