

import React from 'react'
import Login from '../Components/Admin/Login'

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