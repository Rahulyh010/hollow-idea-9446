import React from 'react'
import styled from 'styled-components'
import { FaChartPie } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";

const AdminDashboard = () => {
  return (
    <Maindiv>
        <h2>Dashboard <RiHome7Fill/></h2>
        <div>
            <h3>Business Analytics <FaChartPie/></h3>
            <div>Pending</div>
            <div>Confirmed</div>
            <div>Packaging</div>
            <div>Out for Delivery</div>
        </div>

    </Maindiv>
  )
}

export default AdminDashboard

const Maindiv = styled.div`
    width: 73rem;
    height: 70rem;
    /* background-color: rgba(255, 255, 255, .15);   */
    
    background: rgb(223,218,223);
    background: linear-gradient(90deg, rgba(223,218,223,1) 2%, rgba(241,241,245,1) 97%);
    margin-left:2rem;
`