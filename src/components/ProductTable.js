import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td><img src={product.image} alt={product.title} width="50" /></td>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
