import React from 'react';
import { ShoppingBag, Search, X, Moon, Sun } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery, theme, toggleTheme }) => {
  return (
    <header className="header-glass" id="site-header">
      <div className="container header-content">
        <a href="/" className="logo-link" id="logo">
          <ShoppingBag className="logo-icon" size={28} />
          ShopExplorer
        </a>
        <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '450px' }}>
          <div className="search-container" style={{ flex: 1 }}>
            <Search className="search-icon" size={18} />
            <input
              id="search-input"
              type="text"
              className="search-input"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                id="search-clear-btn"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
