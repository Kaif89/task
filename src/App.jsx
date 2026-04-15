import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

const API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
        setError('Unable to connect. Please check your internet connection and try again.');
      } else {
        setError(err.message || 'An unexpected error occurred while fetching products.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Extract unique categories from fetched products
  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))];
    return ['all', ...cats.sort()];
  }, [products]);

  // Filter products by search query AND category
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [products, searchQuery, activeCategory]);

  // Determine section title
  const sectionTitle = useMemo(() => {
    if (searchQuery.trim()) return 'Search Results';
    if (activeCategory !== 'all') {
      return activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
    }
    return 'Explore Products';
  }, [searchQuery, activeCategory]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="container main-content">
        {!loading && !error && (
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        )}

        <div className="section-header">
          <h1 className="section-title">{sectionTitle}</h1>
          {!loading && !error && (
            <span className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {loading && <Loader />}

        {!loading && error && (
          <ErrorMessage message={error} onRetry={fetchProducts} />
        )}

        {!loading && !error && (
          <ProductGrid products={filteredProducts} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
