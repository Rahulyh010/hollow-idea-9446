import React from 'react'
// <<<<<<< HEAD

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
// =======
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

export const Navbar = () => {
  return (
    <div className='nav-main'>

      <div>
        <Link to="/" >Home</Link>
        <Link to="/admin">Admin</Link>
        
        <Link to="/signin">Sign In</Link>

      </div>



    </div>
  )
}
// >>>>>>> main
