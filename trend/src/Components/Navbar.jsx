import React, { useState } from 'react'
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
import { updateUserAuthStatus } from '../Redux/AuthReducer/action';
import "../Styles/Navbar.css"
import { useEffect } from 'react';
import Search from './Search';

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(()=>{
    
    if (currentUser && currentUser.isAuth === true) {
      if (showLogin === true) {
        setShowLogin(false);
      }
      if (showMenu === false) {
        setShowMenu(true);
      }
    }
  },[showMenu])

 
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
       <div className='nav_buttons' style={{ display: "flex", width: "120px", justifyContent: "space-evenly", alignItems: "center" }}>
                        <img src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
                        <Link to="/cart"><div className='icon_cart' style={{ backgroundColor: "grey", height: "34px", width: "34px", borderRadius: "17px" }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////FxcXZ2dnT09P6+vp+fn5FRUWmpqbPz8+Li4vW1tZISEg2Njb29vbExMQfHx/p6ekoKCgYGBjg4OBwcHATExOZmZnl5eXw8PCsrKyEhIQvLy+0tLRbW1thYWFTU1Nra2ubm5u7u7s8PDx3d3ckJCQLCwuIiIiRkZGgC4EjAAAJuklEQVR4nO2di3aqOhCG64WqtYJ42+IVW63t+7/gEWsrdf5AIJMMsM63zl77rO2l+Qskc8vk6enGYrEYJ0zujL+ZXl46P9WcfTv0fb+F8S4vReFyOet0B6vTUXqsZTgPFNqg3uFn7S7oNCog8CpyNZYeczE6BQUm9KUHXYSXEgJbreVeetz6hKUUtlr/pAeuS6+kwFbrXXromqxLK2wF0mPX4195ha2t9OC1+DRQ2PqSHr0OryYKWzvp4etQdi69EtZh7S+3Hv7wJj18HbomCr06WOKLoYnEeqyKKxOJI+nRa3H8WgWDziwMfS+FnsKV9OANWEyn04/RZtN73e3nz+t/K+iF+HWYTrWJkca19Kh4AeGAgfSYeJlSA8Gvx1yjzaHxtym4T9vSQ2KGXsRoIj0mZpZE4kF6SMxQn7kelps+R3qbSg+JmxmR+Co9JGbeiMJaBYg1iInCmfSQmFnQ2bQnPSZmtkRhLYJuBZgThQ2zvp8+SD7O30iPiZk2uYhz6SExQ5MdTTNrNkRhWLvUdw40mhFLD4kZatbUIvhdAGrWdKSHxMyZhmuatl5Qs6Zp0ZoTUViTnLc2G2LWRFPpMTFDQ241qrDR4osobJob3COpqaa5wcCsaVq0pk8UNs0NpmZNV3pI3JD1wmvaevFOLuKPG3y+kqSQE+6l45sR5Ngry/fnr999+UHs1ejUrAm37WFnNpstw4TIJ3gI/K/6/H57GCal6O/b/jrmuZs2qtL3CuC/s0zsRQrg3bNdmCs0Kdx0wCw2VhhrVtxI4RvfqWeahKoWnnENhVG1mAuMTeWDtIJcTONj46K7bZzjmUaPaHS/apg6rQZbGRwRGiqkRQuVw3Q6LbMrzC2mtT40ul81XgwV7qQF5GI61YBizIphXKRNo/sVw1ghdYMveFEUhstlsjlaScqm9Yb4LSn/M1K8JeNbbxhn/aAb/DkZ5wYUUvseVYm5lP+p+zQdyFjME0bIDdYZT2pHGaPCgIzFvDKURvf1THorCo/UYzWPZsBdthpfa0UhcOcY6pdpkZvWMmtD4YT6OqZ2aQJygzWi3zYUgsARR53PHijUKAKzoBAUF7AkNWHTifwiMAsKn+k4eDJ+NLqvc3NYUAgCY59FhCgBv7qWn/spfoWHMsPQ4ojMmtxN3vwKge3BlXhHG4lzDV52hciR49oaidzg3HWIXSE12PhKQmk2uJVfq8it8BWkGPLGoM0ZmTV5XksqiDVUvKWQQuCoMmbdkRscBUE7aCf/Xf+0U38n/xukhu8Hv6/8eUtqoQ2D+8tBm7w9CAJwCRkrsw9AoTxLPoFP00pmg1mLJauYDWZa7W+YdQ+xA29ZNi1yk4e5uKd62WDuDk+0yE0a7t10yA0Whb0me1y16H7MrRDZvZKoDEEDYDZ4ljLCHvhrteH3UKvtzuCbYaezROaGhZrzEVovsryXlOVt6FuAYgKOGCIBZYOjjNIyNu8JVWY9G0lRALPBGTcLm0Lg2NjpgADd4Ixll0vhBlxCS41H0XqR8cvkUghsDVudq2A2WJ2iYVK4APFoW93HYDZY/btnUoiSe7ba5cBssHra5lEI2jtY3HQN3WDlbcqjEBka9jo5wqJopR/KoxCswhbbO8D1Qpn8YVF4AD/R5iZB6Aar/DQWhaBrp9Ud13C9UG334lCIUhUnFikK0D2jDDxzxLxd2dy/LGDYdIBdo1TCSuU9pb7ux3vqJlw3HkUXwE+zvKNcPmzKGySlGPUGZ8F2s39QkuQWz3q3WOmiaPvbyYXDpua7gHIRDps6OMlAOGzqons6qh5yhpPeI9ANdoWTjgcjwWywo3YA8BiCaNAlpBYWj756xVd/A3reHfVWQXET+Nsd3V8uYXkD+9BVoyp89NAHfaOR94RWJatuUxq4XoAiSCOF4BLadZvSwL3B4DY1UYjiJe4acR2QwhZ9n4lCsOo6bNaM9wbTZJCBQlT54fKMNJgNpo3pDRSCB8Fp4xjoBvtkBOUVouC60y5c2A0mdYLlFYLIswO3KQ10g4lVXF4heNAdHwAH3WCS0yutED0Fjpttw+g+uU1LKwTZJuctG+F68TibllWI/DPn/dKxG/zwprIKgfPivpk4bWie8JDAKFlPg2zu2JoSFWPsBoezzvBOKlHld4eQtH/48xbwBEg0wnMb3Zc4Awa6wbYQadHstCjamef7B4fRfc5dFQVwGN23UqSXj7uWJ0KX8GnhLLovdAndRfflehdjs4YfmYk04exmvZDs6+vGrIkFFTrZ6yXaI91FJzfhswrsmzWOgzME22aNz9MQwgC7Zk3Ulz/AFtQnJy3AkgZg3zx06Roq0qQprvuA2sHqbZ3bk8IJ1Kx5mX5MFwuGFs0VgZo1dT6jHEG3sDfuAAyahIqlh8QMjd027fi5MZ3km3b8HLW+mzbXgKBiw46iAbnSpp0/BzZ8SJvLzKCdUM069wr1bmrYmUnQSWyURNSOr2FrBvb0B/LOHRuK4n3/zdZeXfeogt/R+3zUDE8xq2l7tJwNB8F227/w9u+brxdN1s8J8/n8sHuVvSFcbDLxB6LnZ7o5FUp0fnZzVItkePgMzFMLSB6b/eGk15kvOd9snKSE5XKJF8YurqKsYzaGu4V4obXkTjnbP8xEWKGDdVE+fBBbfhhFZ5obfZv1CxqnFTigZ7H5YFX86thWkcasOr5Yb2tjJ+2sEvfoD+NTf7AMfb6H0gurGKMcb46v8W6/P1yc2OdynC4fne/3u/jYtAPBa8HodT+f73qFWpFM4tPny2lXqQdOwfHtdqSaF7afNW+w6fPgthEhGqyt92gxY7H9M8VEWiHwdVj8M1IcyFqxzE0qbkgghOHMbVugrRhejkUZAwfar4IVisBFmV7mSRRHfK4y4+kVjKiCp1m7XDfoBJTkM9Uo/XpAaa9lZL+VwciwglNqxlnsylrKjJr4qngTd1BT498LoloXFffolcol6TKPR1YcmYhzrDcqZ29nRjEUTWoy4+UOm2FogVvX/ODBkPUk28WqmI16yBwsLpfKqaUW2/WEydlZCpe3zMfQbUcTDTLWirIKKzbV/K8QfSZnD5xkzhCQcz2gwnrNNDmjhc0tJtmfcdEKsgDwWN1fFEc2ZBlt1rsGFyZz66wiN5a5fUo+2/RA5m2q6P2Qucsvdjl6LTISwcr0ZkZm1X3XllxG6tEqm+jAYzOqegkz9s5m9ARUNn2tZkhRMdlkThmKyaaqG3Bg1CVnToTGUAUfwhvA0Ve493eAV1Ixi/QPuwdXv6uxj6b3MAsvRast85mnQhNtzbHu23dvv+uuV2lpJof+6kJ/XyDkOd19f2ZesELvP5KLpNbGGJotAAAAAElFTkSuQmCC" style={{ borderRadius: "17px", width: "40px" }} />
                        </div></Link>

                    </div>
<Link to="/adminLogin">
<div id="admin-nav" >
Admin
</div>
</Link>


      </div>

    </div>
    <div className='nav-main'>



      <div className='nav1' > 
       
      <Link to="/">
      <img className='nav-img' width="60%" src={Logo} alt="ajio" />
      </Link> 

      </div>

<div className='nav2' >
  <div>
    <Link to="/productpage" >Men</Link>
  </div>
  <Link to={"/productpage"}>

  <div>
    women
  </div>
  </Link>

  <Link to={"/productpage"}>
  <div>
    Kids
  </div>

  </Link>

  <Link to={"/productpage"}>
  <div>
    Indie
  </div>

  </Link>
  <Link to={"/productpage"}>

  <div>
    Homes and Kitchen
  </div>
  </Link>
  <div>
    <Search/>
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
