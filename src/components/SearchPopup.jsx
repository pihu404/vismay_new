import React from 'react';
import './SearchPopup.css';

function SearchPopup({ productName, onClose }) {
  return (
    <div className="search-popup-overlay">
      <div className="search-popup">
        <h3>Searched Product</h3>
        <p>You searched for: <strong>{productName}</strong></p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SearchPopup;
