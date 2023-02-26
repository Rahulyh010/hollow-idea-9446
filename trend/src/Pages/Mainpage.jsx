import React from 'react'
import { Navbar } from '../Components/Navbar'
import { AllRoutes } from '../Routes/AllRoutes'

const Mainpage = () => {
    return (
        <div>
            <Navbar />
            <AllRoutes />
        </div>
    )
}

export default Mainpage