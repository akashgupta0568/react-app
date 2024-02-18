import React, { useState } from 'react';
import MyImage from '../../Assests/img.jpg';
import '../Product/Product.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import Button from '../Button/Button';

//let ProductCount = 0;
export const Products = (props) => {
  console.log('Product JS');
  let [ProductCount, updateCount] = useState(0); //that return array

  function increment(){
    //ProductCount++;
    if(ProductCount >= 0){
    updateCount(++ProductCount);
    console.log(ProductCount);
  }
}

  function decrement(){
    if(ProductCount > 0)
    updateCount(--ProductCount);
    console.log(ProductCount);
  }
  //const [count, setCount] = useState(0);
  // function remove() {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  // function Add() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <div className='mainContainer'>
        <div className="card">
          <img src={MyImage} alt="ProductImage" />
          <ProductDetails Name={props.Name} Price={props.Price} isAvailable={props.isAvailable}></ProductDetails>
          <div style={{ display: 'grid', textAlign: 'center' }}>
            {props.children}
            <span className='m-1'>{ProductCount === 0 ? "Zero" : ProductCount}</span>
            <Button eventHandler={increment}>+</Button>
            <Button eventHandler={decrement}>-</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
