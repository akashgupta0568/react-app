import React from 'react'
import { Products } from './Products'
import CreateProduct from '../CreateProduct/CreateProduct';
const Product = [
    {
      Pid: 0,
      Name: 'Camera',
      Price : 2666,
      isAvailable : true,
      image : 'Assests/img.jpg'
    },
    {
      Pid: 1,
      Name: 'Nikon Camera',
      Price : 3000,
      isAvailable : false,
      image : 'Assests/img.jpg'
    }
  ];
const ProductList = () => {
  return (
    <div>
    <div>
        <CreateProduct></CreateProduct>
    </div>
    <div style={{display:'flex'}}>
    <Products id={Product[0].Pid} Name={Product[0].Name} Price={Product[0].Price} isAvailable={Product[0].isAvailable} image={Product[0].image}>
        <p>This is props Children</p>
      </Products>
      <Products id={Product[1].Pid} Name={Product[1].Name} Price={Product[1].Price} isAvailable={Product[1].isAvailable} image={Product[1].image}></Products>
      </div>
      </div>
  )
}

export default ProductList