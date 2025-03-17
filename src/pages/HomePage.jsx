import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaShoppingCart, FaHeart, FaUsers, FaSeedling, FaMoneyBillWave } from 'react-icons/fa';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  const containerStyle = {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  };
  const titleStyle = {
    color: '#4CAF50',
    fontSize: '2.5em',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 3px rgba(0,0,0,0.05)',
  };
  const subtitleStyle = {
    fontSize: '1.2em',
    color: '#495057',
    marginBottom: '30px',
    textAlign: 'center',
    maxWidth: '800px',
    lineHeight: '1.6',
  };
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
  };
  const cardStyle = {
    padding: '30px',
    border: 'none',
    borderRadius: '15px',
    textAlign: 'center',
    width: '250px',
    backgroundColor: '#f8f9fa', // Light background shade
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
  };
  const linkStyle = {
    textDecoration: 'none',
    display: 'block',
    height: '100%',
  };
  const iconStyle = {
    fontSize: '3em',
    color: '#4CAF50',
    marginBottom: '15px',
    transition: 'transform 0.4s ease-out',
  };
  const cardTitleStyle = {
    fontSize: '1.5em',
    color: '#212529',
    marginBottom: '10px',
    fontWeight: '600',
  };
  const cardDescriptionStyle = {
    color: '#6c757d',
    fontSize: '0.95em',
    lineHeight: '1.5',
  };
  const sectionStyle = {
    maxWidth: '900px',
    padding: '40px',
    marginBottom: '40px',
    borderRadius: '15px',
    backgroundColor: '#f8f9fa', // Light background shade
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  };
  const sectionTitleStyle = {
    fontSize: '2.2em',
    color: '#4CAF50',
    marginBottom: '25px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 3px rgba(0,0,0,0.05)',
  };
  const featureListStyle = {
    paddingLeft: '25px',
    color: '#495057',
    fontSize: '1em',
  };
  const featureItemStyle = {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
  };
  const featureIconStyle = {
    fontSize: '1.2em',
    color: '#4CAF50',
    marginRight: '15px',
  };

  return (
    <div style={containerStyle}>
      <div className="welcome-section"> {/* Added class name here */}
        <h1 style={titleStyle}>Welcome to Vismay - Empowering Farmers Together</h1>
        <p style={subtitleStyle}>
          Vismay is a community-driven platform designed to connect farmers, facilitate resource exchange, and foster mutual support.
          Whether you're looking to barter equipment, sell your harvest, or contribute to the farming community, Vismay provides the tools and network to help you thrive.
        </p>
      </div>

      {/* TailorSection component removed */}

      <div style={cardContainerStyle} className="card-container">
        <Link to="/barter" style={linkStyle}>
          <div style={cardStyle} className="homepage-card homepage-card-hover">
            <FaHandshake style={iconStyle} className="homepage-card-icon" />
            <h3 style={cardTitleStyle}>Barter</h3>
            <p style={cardDescriptionStyle}>Exchange agricultural machines and tools with other farmers in your network.</p>
          </div>
        </Link>
        <Link to="/sell" style={linkStyle}>
          <div style={cardStyle} className="homepage-card homepage-card-hover">
            <FaShoppingCart style={iconStyle} className="homepage-card-icon" />
            <h3 style={cardTitleStyle}>Sell</h3>
            <p style={cardDescriptionStyle}>Reach a wider market and sell your crops directly to buyers at fair prices.</p>
          </div>
        </Link>
        <Link to="/donations" style={linkStyle}>
          <div style={cardStyle} className="homepage-card homepage-card-hover">
            <FaHeart style={iconStyle} className="homepage-card-icon" />
            <h3 style={cardTitleStyle}>Donations</h3>
            <p style={cardDescriptionStyle}>Support fellow farmers in need and contribute to the sustainability of our agricultural community.</p>
          </div>
        </Link>
      </div>

      <section style={sectionStyle} className="home-section">
        <h2 style={sectionTitleStyle} className="home-section-title">Why Choose Vismay?</h2>
        <ul style={featureListStyle} className="feature-list">
          <li style={featureItemStyle} className="feature-item">
            <FaUsers style={featureIconStyle} className="feature-icon" />
            <b>Community Focused:</b> Connect with a network of farmers, share experiences, and grow together.
          </li>
          <li style={featureItemStyle} className="feature-item">
            <FaHandshake style={featureIconStyle} className="feature-icon" />
            <b>Barter System:</b> Exchange equipment and tools to reduce costs and improve efficiency.
          </li>
          <li style={featureItemStyle} className="feature-item">
            <FaShoppingCart style={featureIconStyle} className="feature-icon" />
            <b>Direct Selling:</b> Sell your produce directly to buyers, ensuring fair prices and wider reach.
          </li>
          <li style={featureItemStyle} className="feature-item">
            <FaHeart style={featureIconStyle} className="feature-icon" />
            <b>Support &amp; Donations:</b> Offer and receive support within the community, contributing to collective growth.
          </li>
          <li style={featureItemStyle} className="feature-item">
            <FaSeedling style={featureIconStyle} className="feature-icon" />
            <b>Sustainable Agriculture:</b> Promote resource sharing and reduce waste, fostering sustainable farming practices.
          </li>
          <li style={featureItemStyle} className="feature-item">
            <FaMoneyBillWave style={featureIconStyle} className="feature-icon" />
            <b>Economic Empowerment:</b> Enhance your economic stability by saving costs and increasing income opportunities.
          </li>
        </ul>
      </section>

      <p style={{ color: '#6c757d', marginTop: '30px', textAlign: 'center' }}>
        Join Vismay today and be part of a growing network of farmers working together for a stronger future.
      </p>
    </div>
  );
}

export default HomePage;
