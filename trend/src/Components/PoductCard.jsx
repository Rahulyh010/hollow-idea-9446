import React from 'react'

const ProductCard = ({title,category,discription,image,price,rating}) => {
    console.log(title)
  return (
    <div>
        <img style={{width:"30%"}} src={image} alt={title} />
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{rating.rate}</p>
    </div>
  )
}

export default ProductCard