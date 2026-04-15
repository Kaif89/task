import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  const delay = Math.min(index * 0.06, 0.6); // stagger cap at 600ms

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${delay}s` }}
      id={`product-${product.id}`}
    >
      <div className="product-image-container">
        <span className="category-badge">{product.category}</span>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
          width="200"
          height="200"
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
          <span className="product-price">
            <span className="currency">$</span>
            {product.price.toFixed(2)}
          </span>
          <div className="product-rating">
            <span className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill={i < Math.round(product.rating?.rate || 0) ? 'currentColor' : 'none'}
                  strokeWidth={i < Math.round(product.rating?.rate || 0) ? 0 : 1.5}
                  style={{
                    opacity: i < Math.round(product.rating?.rate || 0) ? 1 : 0.3,
                  }}
                />
              ))}
            </span>
            <span className="rating-value">{product.rating?.rate || 0}</span>
            <span className="rating-count">({product.rating?.count || 0})</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
