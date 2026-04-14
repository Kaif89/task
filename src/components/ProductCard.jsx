import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <span className="category-badge">{product.category}</span>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>
        <p className="product-description" title={product.description}>
          {product.description}
        </p>
        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)}</span>
          <div className="product-rating">
            <Star size={16} fill="currentColor" />
            <span>{product.rating?.rate || 0}</span>
            <span className="rating-count">({product.rating?.count || 0})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
