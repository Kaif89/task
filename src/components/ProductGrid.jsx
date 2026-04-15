import React from 'react';
import ProductCard from './ProductCard';
import { SearchX } from 'lucide-react';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state" id="empty-state">
        <div className="empty-icon-wrapper">
          <SearchX className="empty-icon" />
        </div>
        <h3 className="empty-title">No products found</h3>
        <p className="empty-text">
          Try adjusting your search or category filter to find what you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="product-grid" id="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
