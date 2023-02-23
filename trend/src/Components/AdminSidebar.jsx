import React from 'react'
import styled from 'styled-components'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiFillHome,AiOutlineShoppingCart,AiOutlineSetting } from 'react-icons/ai';
import { GoPackage } from 'react-icons/go';
import { IoMdReturnLeft } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BiRupee,BiImages,BiInfoCircle } from 'react-icons/bi';
import Logo from "../Images/Logo.png"
import { Link } from 'react-router-dom';




const AdminSidebar = () => {
  return (
    <SidebarMain>
      <div><img src={Logo} alt="" style={{width:"9rem",marginLeft:"5rem",marginTop:"1rem"}}/></div>
      <div>
        <Sidebar  style={{width:"100%",marginTop:"-5rem"}}>
          <Menu>
          <Link style={{textDecoration:"none"}} to="/Dashboard"><MenuItem> <AiFillHome style={{marginLeft:"0.5rem",marginRight:"1.2rem"}}/>Dashboard </MenuItem></Link>
            <SubMenu  label="Products" icon={<GoPackage/>}>
            <Link style={{textDecoration:"none"}} to="/AdminProducts"><MenuItem> All Products </MenuItem></Link>
              <Link style={{textDecoration:"none"}} to="/AddProducts"><MenuItem > Add Products </MenuItem></Link>
            </SubMenu>
            <MenuItem><AiOutlineShoppingCart style={{marginLeft:"0.5rem",marginRight:"1.1rem"}}/> Orders </MenuItem>
            <MenuItem><IoMdReturnLeft style={{marginLeft:"0.5rem",marginRight:"1.2rem"}}/> Return Orders </MenuItem>
          
            <SubMenu label="Customers" icon={<BsPerson/>}>
              <MenuItem> All Customers </MenuItem>
              
            </SubMenu>
            <SubMenu label="Delivery Boys" icon={<MdOutlineDeliveryDining/>}>
              <MenuItem> Rakesh Sharma </MenuItem>
              <MenuItem> Sanjya Kushwaha </MenuItem>
            </SubMenu>
            <MenuItem><BiRupee style={{marginLeft:"0.5rem",marginRight:"1.1rem"}}/> Payout Setting </MenuItem>
            <MenuItem><AiOutlineSetting style={{marginLeft:"0.5rem",marginRight:"1.1rem"}}/> Shop Setting </MenuItem>
            <MenuItem><BiImages style={{marginLeft:"0.5rem",marginRight:"1.1rem"}}/> Home Sliders </MenuItem>
            <MenuItem><BiInfoCircle style={{marginLeft:"0.5rem",marginRight:"1.1rem"}}/> About Us. </MenuItem>
          </Menu>
        </Sidebar>;
      </div>
    </SidebarMain>
  )
}

export default AdminSidebar

const SidebarMain = styled.div`
    width: 300px;
    height: 800px;
    display: grid;
    background-color: white;
    /* background: rgb(228,233,177);
    background: linear-gradient(90deg, rgba(228,233,177,1) 10%, rgba(209,248,251,1) 58%); */
    margin-left:0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    text-align: left;
    margin-top:-3.5rem;
    
    
    
`

