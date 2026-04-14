import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred while fetching products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter((product) => 
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container main-content">
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h1 className="section-title" style={{ marginBottom: 0 }}>
            {searchQuery ? 'Search Results' : 'Explore Products'}
          </h1>
          {!loading && !error && (
            <span className="results-count">({filteredProducts.length} items)</span>
          )}
        </div>

        {loading && <Loader message="Discovering amazing products..." />}
        
        {!loading && error && (
          <ErrorMessage message={error} onRetry={fetchProducts} />
        )}
        
        {!loading && !error && (
          <ProductGrid products={filteredProducts} />
        )}
      </main>
    </>
  );
}

export default App;
