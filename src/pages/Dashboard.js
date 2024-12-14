import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import { fetchProducts } from '../api/productApi'; // Import the API function

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data)); // Fetch products using the API function
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      {products.length > 0 ? (
        <ProductTable products={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Dashboard;
