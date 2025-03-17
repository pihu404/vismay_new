import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#1e293b', // Dark background color from the image
    color: '#f8f9fa', // Light text color
    padding: '40px 30px',
  };

  const sectionStyle = {
    marginBottom: '30px',
  };

  const headingStyle = {
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#f8f9fa',
    marginBottom: '15px',
  };

  const linkStyle = {
    display: 'block',
    color: '#d1d5db', // Light grey color for links
    textDecoration: 'none',
    marginBottom: '10px',
  };

  const iconLinkStyle = {
    color: '#d1d5db',
    fontSize: '1.2em',
    marginRight: '15px',
    textDecoration: 'none',
  };

  const contactInfoStyle = {
    color: '#d1d5db',
    marginBottom: '10px',
  };

  const copyrightStyle = {
    marginTop: '20px',
    fontSize: '0.9em',
    color: '#d1d5db',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ ...sectionStyle, minWidth: '150px' }}>
          <h3 style={headingStyle}>Quick Links</h3>
          <Link to="/barter" style={linkStyle}>Barter Equipment</Link>
          <Link to="/donations" style={linkStyle}>Support Farmers</Link>
          <Link to="/sell" style={linkStyle}>Buy/Sell Crops</Link>
        </div>

        <div style={{ ...sectionStyle, minWidth: '200px' }}>
          <h3 style={headingStyle}>Contact Us</h3>
          <p style={contactInfoStyle}>Email: info@vismay.com</p>
          <p style={contactInfoStyle}>Phone: +91 123-456-7890</p>
          <p style={contactInfoStyle}>Address: Bangalore, India</p>
        </div>

        <div style={{ ...sectionStyle, minWidth: '120px' }}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div>
            <a href="#" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FaInstagram /></a>
            <a href="mailto:info@vismay.com" style={iconLinkStyle}><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        © 2025 Vismay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
