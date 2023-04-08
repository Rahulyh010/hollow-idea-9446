

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Admin/Login'
import DynamicPage from '../Pages/DynamicPage'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<DynamicPage />} />
        <Route path="/AdminPage" element={<Login/>} />
      </Routes>

    </div>
  )
}

export default MainRoutes