import React from 'react';
import { useState } from 'react';
import './Productform.css';


const ProductForm = (props) => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState(false); 
  

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission, e.g., send data to a backend server
        console.log('Product Name:', productName);
        console.log('Product Price:', productPrice);
        console.log('Product Description:', productDescription);
        console.log('Is Available:', isAvailable);
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setIsAvailable(false);
      let product= {
        pName:productName,
        pPrice: productPrice,
        pDes: productDescription,
        pAvailable : isAvailable
      }
      console.log(product);
        // props.createProduct(product);
        props.createProduct(product);
      };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input type="number" className="form-control" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product Description</label>
          <textarea className="form-control" id="productDescription" rows="3" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="isAvailable" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
          <label className="form-check-label" htmlFor="isAvailable">
            Available
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ProductForm