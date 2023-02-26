import {  useToast } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Redux/store';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { LogoutProcess } from '../../Redux/AdminAuthReducer/action';




const AdminNavbar = () => {
  const navigate = useNavigate()
  const logout = useSelector((store) => store.adminauth)
  // console.log(logout)
  const dispatch = useDispatch()
  // console.log(store.adminauth.isAuth))
  // console.log(logout)
  const LogoutToast = () => {
    toast({
      title:"Logged Out",
      description:"Successfully Logged Out",
      Duration:"5000",
      isClosable:"true",
      status:"success",
      position:"top"
    })
    
  }
  const handleLogout = () => {
    // navigate("/Login")
   
    dispatch(LogoutProcess())
    LogoutToast()
    navigate("/")
    

    
  }

  const toast = useToast()
  return (
    

    <AdminNav>
      
      <div><h3 style={{ marginRight: "45rem", marginLeft: "2rem" }}>Admin Panel</h3></div>
      <Logout onClick={handleLogout}><AiOutlinePoweroff /> Logout</Logout>


    </AdminNav>
    

  )
}

export default AdminNavbar

const Logout = styled.button`
    padding: 0.7rem;
    border-radius: 0.5rem;
    border: none;
    font-weight:bold;
    font-family: 'Comfortaa', cursive;
    font-size:15px;
    color: white;
    background-color: #1e8b61;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 0.2rem;
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