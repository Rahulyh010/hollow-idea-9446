import React from 'react'
import { Navbar } from '../Components/Navbar'
import { AllRoutes } from '../Routes/AllRoutes'

const DynamicPage = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <AllRoutes/>
    </div>
  )
}

export default DynamicPage