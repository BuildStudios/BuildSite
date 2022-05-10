import React from 'react'
import Link from 'react-router-dom'

import Button from 'react-bootstrap/Button'

function ProductCard({ productName, productImage, productPage }) {
  return (
    <div className='productCard'>
        <img src={productImage} alt='product'></img>
        <Link to={productPage}><Button>{productName}</Button></Link>
    </div>
  )
}

export default ProductCard