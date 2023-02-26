import React, { useState } from 'react'
// <<<<<<< HEAD

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
// =======
import { Link } from 'react-router-dom'
import { updateUserAuthStatus } from '../Redux/AuthReducer/action';
import "../Styles/Navbar.css"

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showMenu,setShowMenu] = useState(false);

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if(currentUser && currentUser.isAuth === true){
    if(showLogin===true){
     setShowLogin(false)
    }
    if(showMenu===false){
       setShowMenu(true);
    }
 }

 
 const logout=()=>{
  console.log(currentUser.id,"currentUser.id")
  updateUserAuthStatus(currentUser.id,{isAuth:false})
  currentUser.isAuth = false;
  localStorage.setItem("currentUser",JSON.stringify(currentUser))
  if(showLogin===false){
    setShowLogin(true)
   }
   if(showMenu===true){
      setShowMenu(false);
   }
  //  localStorage
}

  return (
    <div id="nav-main1" >
    <div id="nav" >
      <div id="nav01" >

      </div>
      <div id="nav02">
      {showLogin && 
        <Link to={"/signin"}>
<p>Sign In/login</p>
        </Link>
      }
      {showMenu && 
        <p>  Hi, {currentUser.firstName}</p>
      }
      <button onClick={logout}>Logout</button>
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
      <img className='nav-img' width="40%" src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="ajio" />
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
