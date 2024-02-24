import React from 'react'
import ProductForm from './ProductForm'

const CreateProduct = (props) => {

  function Oncreateproduct(product){
    console.log("Create Product");
    console.log(product);
  }

  return (
    <div className='row'>
        <p>Create Product</p>
        <div className='col-lg-8 mx-auto'>
            <ProductForm createProduct={Oncreateproduct}></ProductForm>
        </div>
    </div>
  )
}

export default CreateProduct