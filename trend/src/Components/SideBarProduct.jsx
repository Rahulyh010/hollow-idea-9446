import React from 'react'
import styled from 'styled-components'

const SideBarProduct = () => {
  
  return (
    <SidrBarDiv>
      <h2 style={{marginTop:"60px", fontWeight:"bolder", fontSize:"30px"}}>Refine By</h2>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   }} >
        <h3>Gender</h3>
          <div>
          <input type="checkbox" value="men" />
          <label>Men</label>
        </div>
        <div>  
          <input type="checkbox" value="women" />
          <label>Women</label>
        </div>
      </div>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   marginTop:"20px"
                   }} >
        <h3>Category</h3>
          <div>
          <input type="checkbox" value="new_Arrival" />
          <label>Naew Arrival's</label>
        </div>
        <div>  
          <input type="checkbox" value="mens-t-shirt" />
          <label>TShirts for mens</label>
        </div>
        <div>  
          <input type="checkbox" value="mens-jeans" />
          <label>Jeans for men's</label>
        </div>
        <div>  
          <input type="checkbox" value="womens-tops" />
          <label>womens tops</label>
        </div>
        <div>  
          <input type="checkbox" value="womens-jeans" />
          <label>Womens Jeans</label>
        </div>
      </div>
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", 
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   marginTop:"20px"
                   }} >
        <h3>Brands</h3>
          <div>
          <input type="checkbox" value="Nike" />
          <label>Nike</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying Machine" />
          <label>Flying Machine</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying Machine Women" />
          <label>Flying Machine Women</label>
        </div>
        <div>  
          <input type="checkbox" value="U.S Polo Assan.Denim.Co" />
          <label>U.S Polo Assan.Denim.Co</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying U.S Polo Assan" />
          <label>U.S Polo Assan</label>
        </div>
      </div>
      
    </SidrBarDiv>
  )
}

export default SideBarProduct

const SidrBarDiv= styled.div`
width: 300px;
height: 700px;
display: grid;
background-color: white;
// border:1px solid;
 box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
text-align: center;


`