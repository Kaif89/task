import React from 'react';
import ProductCard from './ProductCard';
import { SearchX } from 'lucide-react';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <SearchX className="empty-icon" />
        <h3>No products found</h3>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Try adjusting your search to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
