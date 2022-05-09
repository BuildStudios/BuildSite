import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ productName, productImage, productPage }) {
  return (
    <div className='productCard'>
        <img src={productImage} alt='product'></img>
        <Link to={productPage}><button>{productName}</button></Link>
    </div>
  )
}

export default ProductCard