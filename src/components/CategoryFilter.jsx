import React from 'react';

const CategoryFilter = ({ categories, active, onSelect }) => {
  return (
    <div className="filter-bar" id="category-filter" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-chip${active === cat ? ' active' : ''}`}
          onClick={() => onSelect(cat)}
          role="tab"
          aria-selected={active === cat}
          id={`filter-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`}
        >
          {cat === 'all' ? '✦ All' : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
