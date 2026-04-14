import React from 'react';
import { Store, Search } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header-glass">
      <div className="container header-content">
        <a href="/" className="logo-link">
          <Store className="logo-icon" size={32} />
          ShopExplorer
        </a>
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search for products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
