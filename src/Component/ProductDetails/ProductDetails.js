import React from 'react'

const ProductDetails = (props) => {
  console.log("Product Details js");
    let badge = 'badge ';
  badge += props.isAvailable ? 'bg-success' : 'bg-danger';
  return (
    <div className="card-body">
            <p className="card-text">{props.Name}</p>
            <p className="card-text">{props.Price}</p>
            <p className={badge}>{props.isAvailable ? 'Available' : 'Unavailable'}</p>
    </div>
  )
}

export default ProductDetails