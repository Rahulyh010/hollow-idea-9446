import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

export const Navbar = () => {
  return (
    <div className='nav-main'>

<div>
<Link to="/" >Home</Link>
<Link to="/admin">Admin</Link>
<Link to="/AdminProducts">Product Page</Link>

</div>

<div>

</div>

    </div>
  )
}
