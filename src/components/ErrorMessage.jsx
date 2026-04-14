import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <AlertCircle className="error-icon" />
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Oops! Something went wrong</h3>
        <p style={{ color: 'var(--text-secondary)' }}>{message}</p>
      </div>
      {onRetry && (
        <button onClick={onRetry} className="retry-button">
          <RefreshCw size={18} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
