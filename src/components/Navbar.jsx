import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaShoppingCart, FaHeart } from 'react-icons/fa';

function Navbar() {
  const navStyle = {
    padding: '20px 30px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#495057',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  };
  const iconStyle = {
    fontSize: '1.2em',
    marginRight: '8px',
    color: '#4CAF50',
    transition: 'transform 0.3s ease',
  };
  const brandStyle = {
    textDecoration: 'none',
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: '1.3em',
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={brandStyle}>Vismay</Link>
      </div>
      <div style={{ display: 'flex', gap: '25px' }}>
        <Link to="/barter" style={linkStyle} className="navbar-link">
          <FaHandshake style={iconStyle} className="navbar-icon-hover" />
          Barter
        </Link>
        <Link to="/donations" style={linkStyle} className="navbar-link">
          <FaHeart style={iconStyle} className="navbar-icon-hover" />
          Donations
        </Link>
        <Link to="/sell" style={linkStyle} className="navbar-link">
          <FaShoppingCart style={iconStyle} className="navbar-icon-hover" />
          Sell
        </Link>
      </div>
      <div>
        <span style={{ color: '#495057', marginRight: '10px' }}>User Name</span> <span style={{ fontSize: '1.3em', color: '#6c757d' }}>👤</span>
      </div>
    </nav>
  );
}

export default Navbar;
