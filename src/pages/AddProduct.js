import React from 'react';
import ProductForm from '../components/ProductForm'; // Import ProductForm

const AddProduct = () => {
  const handleFormSubmit = (product) => {
    console.log('New Product:', product);
    // You can send the product to a backend API or update a local state
  };

  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddProduct;
