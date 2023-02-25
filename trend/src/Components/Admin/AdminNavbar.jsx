import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Redux/store';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { LogoutProcess } from '../../Redux/AdminAuthReducer/action';




const AdminNavbar = () => {
  const navigate = useNavigate()
  const logout = useSelector((store) => store.adminauth)
  // console.log(logout)
  const dispatch = useDispatch()
  // console.log(store.adminauth.isAuth))
  // console.log(logout)
  const handleLogout = () => {
    // navigate("/Login")
    dispatch(LogoutProcess())
    navigate("/")

  }
  return (

    <AdminNav>
      <div><h3 style={{ marginRight: "45rem", marginLeft: "2rem" }}>Admin Panel</h3></div>
      <button onClick={handleLogout}>Logout <RiLogoutCircleLine/></button>
      
      {/* <div><p>Super Admin</p></div>
      <div><img style={{ width: "2rem" }} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" /></div> */}
      {/* <div>
        <Sidebar style={{display:"block-inline"}}>
          <Menu>
            <SubMenu label="Admin" icon={<img style={{ width: "2rem" }} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" />}>
              <MenuItem onClick={handleLogout}> Logout </MenuItem></Link>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div> */}
      {/* <div>
        <Select placeholder='Admin' icon={<img style={{ width: "2rem" }} src={"https://cdn-icons-png.flaticon.com/512/1144/1144709.png"} alt="" />}>
          <option onClick={handleLogout} value='option1'>Logout</option>
        </Select>
      </div> */}
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