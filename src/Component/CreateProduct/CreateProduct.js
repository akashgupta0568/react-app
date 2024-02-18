import React from 'react'
import ProductForm from './ProductForm'

const CreateProduct = () => {
  return (
    <div className='row'>
        <p>Create Product</p>
        <div className='col-lg-8 mx-auto'>
            <ProductForm></ProductForm>
        </div>
    </div>
  )
}

export default CreateProduct