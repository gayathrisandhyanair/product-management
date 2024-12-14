import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Import ProductCard
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Dashboard;
