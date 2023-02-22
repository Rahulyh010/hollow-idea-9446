import React from 'react'
import background from "../Images/background.png"
import styled from 'styled-components'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminDashboard from '../Components/AdminDashboard'

const Admin = () => {
  return (
    <Maindiv>
        <AdminNavbar/>
        <div style={{display:"flex"}}>
            <div><AdminSidebar/></div>
            <div><AdminDashboard/></div>
        </div>
    </Maindiv>
  )
}

export default Admin



const Maindiv = styled.div`
    margin: 0%;
    padding: 0%;
    background-image: url(${background});
`

