import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-container not-found-page">
      <div className="error-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="home-link">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
