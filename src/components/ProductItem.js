import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const ProductItem = ({ product }) => (
  <div className="prod-layer">
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  </div>
  
);

export default ProductItem;