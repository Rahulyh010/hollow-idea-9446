import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const SideBarProduct = () => {
  const products=useSelector((store)=>store.product.products)
console.log(products);
   const handleChange =(e)=>{
          
   }
  return (
    <SidrBarDiv>
      <h2 style={{marginTop:"60px", fontWeight:"bolder", fontSize:"30px"}}>Refine By</h2>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   }} >
        <h3 style={{textAlign:"left",marginLeft:"30px",
                     fontWeight:"bold"
                     }}>Gender</h3>
        <div style={{textAlign:"left", marginLeft:"40px"}}>
        <div>
          <input type="checkbox" value="men" onChange={handleChange} />
          <label>Men</label>
        </div>
        <div>  
          <input type="checkbox" value="women" onChange={handleChange}/>
          <label>Women</label>
        </div>
      </div>
        </div>
        
      <div style={{boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   marginTop:"20px"
                   }} >
        <h3 style={{textAlign:"left",marginLeft:"30px",
                     fontWeight:"bold"
                     }}>Category</h3>
        <div style={{textAlign:"left", marginLeft:"40px"}}>
        <div>
          <input type="checkbox" value="new_Arrival" onChange={handleChange}/>
          <label>New Arrival's</label>
        </div>
        <div>  
          <input type="checkbox" value="mens-t-shirt"onChange={handleChange} />
          <label>TShirts for mens</label>
        </div>
        <div>  
          <input type="checkbox" value="mens-jeans"onChange={handleChange} />
          <label>Jeans for men's</label>
        </div>
        <div>  
          <input type="checkbox" value="womens-tops" onChange={handleChange}/>
          <label>womens tops</label>
        </div>
        <div>  
          <input type="checkbox" value="womens-jeans"onChange={handleChange} />
          <label>Womens Jeans</label>
        </div>
      </div>  
        </div>  
          
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", 
                   width:"80%",height:"auto",
                   marginLeft:"50px",
                   marginTop:"20px"
                   }} >
        <h3 style={{textAlign:"left",marginLeft:"30px",
                     fontWeight:"bold"
                     }}>Brands</h3>
       <div style={{textAlign:"left", marginLeft:"40px"}}>
          <div>
          <input type="checkbox" value="Nike"onChange={handleChange} />
          <label>Nike</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying Machine"onChange={handleChange} />
          <label>Flying Machine</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying Machine Women"onChange={handleChange} />
          <label>Flying Machine Women</label>
        </div>
        <div>  
          <input type="checkbox" value="U.S Polo Assan.Denim.Co"onChange={handleChange} />
          <label>U.S Polo Assan.Denim.Co</label>
        </div>
        <div>  
          <input type="checkbox" value="Flying U.S Polo Assan" onChange={handleChange}/>
          <label>U.S Polo Assan</label>
        </div>
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