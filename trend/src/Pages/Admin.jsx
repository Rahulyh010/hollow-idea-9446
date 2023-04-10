import React from 'react'
import background from "../Images/background.png"
import styled from 'styled-components'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
// import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminRoutes from '../Routes/AdminRoutes'

const Admin = () => {
  return (
    <Maindiv>
      <div style={{ display: "flex" }}>
        <div style={{width:"20%",marginTop:"3rem"}}><AdminSidebar /></div>
        <div style={{width:"80%"}}>
          <AdminNavbar />
          <AdminRoutes />
        </div>
      </div>
    </Maindiv>
  )
}

export default Admin



const Maindiv = styled.div`
    margin: 0%;
    width: 100%;
    padding: 0%;
    height: auto;
    
    /* background-image: url(${background}); */
    
    
`

