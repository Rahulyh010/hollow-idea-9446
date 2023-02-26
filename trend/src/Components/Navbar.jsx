import React from 'react'
import Logo from "../Images/Logo.png"
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
    <div id="nav-main1" >
    <div id="nav" >
      <div id="nav01" >

      </div>
      <div id="nav02">
        <Link to={"/signin"}>
<p>Sign In/login</p>
        </Link>

<Link to="/adminLogin">
<div id="admin-nav" >
Admin
</div>
</Link>


      </div>

    </div>
    <div className='nav-main'>



      <div className='nav1' > 
       
      <Link href="/">
      <img className='nav-img' width="60%" src={Logo} alt="ajio" />
      </Link> 

      </div>

<div className='nav2' >
  <div>
    <Link to="/productpage" >Men</Link>
  </div>
  <div>
    women
  </div>
  <div>
    Kids
  </div>
  <div>
    Indie
  </div>
  <div>
    Homes and Kitchen
  </div>
  <div>
    <input type="text"  placeholder='Search Trend' />
  </div>
  <div>
    <img src="https://cdn-icons.flaticon.com/svg/3916/3916585.svg?token=exp=1677352364~hmac=a39d2926056df42d24de9d96aeb5662e" alt="" />
  </div>
  <div>
    <Link to="/cartPage">
    <img style={{width:"100%"}} src="https://www.flaticon.com/svg/vstatic/svg/7928/7928126.svg?token=exp=1677352794~hmac=fb29ea36519325979e5a1af50b1aac53" alt="" />
    </Link>
 
  </div>

</div>

    </div>
    </div>
  )
}
// >>>>>>> main
