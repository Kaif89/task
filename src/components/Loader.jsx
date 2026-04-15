import React from 'react';

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image" />
    <div className="skeleton-body">
      <div className="skeleton-line h-lg w-full" />
      <div className="skeleton-line w-3-4" />
      <div className="skeleton-line w-1-2" />
      <div className="skeleton-footer">
        <div className="skeleton-line h-lg w-1-3" />
        <div className="skeleton-line w-1-3" />
      </div>
    </div>
  </div>
);

const Loader = ({ message = 'Discovering amazing products...' }) => {
  return (
    <div id="loader">
      <div className="loader-container">
        <div className="spinner-ring" />
        <p className="loader-text">{message}</p>
      </div>
      <div className="skeleton-grid" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
