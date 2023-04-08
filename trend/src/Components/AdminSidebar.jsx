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
      <Link to="/"><div><img src={Logo} alt="" style={{width:"12rem",marginLeft:"3rem",marginTop:"2rem"}}/></div></Link>
      <div style={{  height: 'auto'}}>
        <Sidebar  style={{width:"98%",marginTop:"3rem"}}>
          <Menu>
          <Link to="/" style={{textDecoration:"none"}} ><MenuItem><DesignDiv><div><AiFillHome/></div>
          <div>Dashboard</div></DesignDiv></MenuItem></Link>
            <SubMenu  label="Products" icon={<GoPackage/>}>
            <Link style={{textDecoration:"none"}} to="/AllProducts"><MenuItem> All Products </MenuItem></Link>
              <Link style={{textDecoration:"none"}} to="/AddProducts"><MenuItem > Add Products </MenuItem></Link>
            </SubMenu>
            <MenuItem><DesignDiv><div><AiOutlineShoppingCart/></div>
            <div>Orders </div></DesignDiv></MenuItem>
            <MenuItem><DesignDiv><div><IoMdReturnLeft/></div>
            <div>Return Orders</div></DesignDiv>  </MenuItem>
          
            <SubMenu label="Customers" icon={<BsPerson/>}>
              <MenuItem> All Customers </MenuItem>
              
            </SubMenu>
            <SubMenu label="Delivery Boys" icon={<MdOutlineDeliveryDining/>}>
              <MenuItem> Rakesh Sharma </MenuItem>
              <MenuItem> Sanjya Kushwaha </MenuItem>
            </SubMenu>
            <MenuItem ><DesignDiv><BiRupee />
            <div>Payout Setting</div></DesignDiv>  </MenuItem>

            <MenuItem><DesignDiv><div><AiOutlineSetting /></div>
            <div>Shop Setting</div></DesignDiv>  </MenuItem>

            <MenuItem><DesignDiv><div><BiImages /></div>
            <div>Home Sliders</div></DesignDiv>  </MenuItem>

            <MenuItem><DesignDiv >
              <div> <BiInfoCircle/></div>
              <div> <p >About Us.</p> </div>
              </DesignDiv></MenuItem>
          </Menu>
        </Sidebar>
       
      </div>
    </SidebarMain>
  )
}

export default AdminSidebar

const DesignDiv = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  padding-left:0.5rem
`

const SidebarMain = styled.div`
    width: auto;
    height: auto;
   
    /* background: rgb(228,233,177);
    background: linear-gradient(90deg, rgba(228,233,177,1) 10%, rgba(209,248,251,1) 58%); */
    /* margin-left:0; */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    text-align: left;
    margin-top:-3.5rem;

    & a {
      color: #3a3a3a;
    }& a:hover{
      color: #106d4a
    }
    
`

