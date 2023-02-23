import React from 'react'
import { Form, Field } from 'react-final-form'

const AddProducts = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div>
        <form action="">
          <label htmlFor="">Product Name *</label>
          <input type="text" placeholder='Enter Product Name' />
          <label htmlFor="">Product Image *</label>
          <input type="text" placeholder='Enter Image url' />
          <label htmlFor="">Product Price *</label>
          <input type="text" placeholder='Enter Product Price' />
          <label htmlFor="">Product Description *</label>
          <input type="text" placeholder='Enter Product Description' />
          <label htmlFor="">Available Stock *</label>
          <input type="text" placeholder='Available stock eg. 200' />
        </form>
        <button>Add Product</button>
      </div>
    </div>
  )
}

export default AddProducts