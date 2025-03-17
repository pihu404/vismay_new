import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

function DonationsPage() {
  const [showUpiDetails, setShowUpiDetails] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const sectionStyle = {
    margin: '20px 0',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };
  const headingStyle = {
    marginBottom: '15px',
    color: '#333',
  };
  const categoryStyle = {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    border: '1px solid #dee2e6',
  };
  const paymentButtonStyle = {
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  };
  const upiDetailsStyle = {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#e0f7fa',
    borderRadius: '5px',
    border: '1px solid #b2ebf2',
  };
  const inputStyle = {
    padding: '8px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ced4da',
  };

  const handleUpiClick = () => {
    setShowUpiDetails(!showUpiDetails);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2><FaHeart style={{ marginRight: '10px' }} />Support Our Farmers Through Donations</h2>
      <p>Your donations can make a significant impact on the lives of farmers in need. By donating, you are contributing to their education, helping them with debt relief, and supporting farm improvements. Your generosity empowers farmers to build sustainable practices and secure a better future for themselves and their communities. Every contribution, big or small, is a step towards strengthening the backbone of our society and ensuring food security for all.</p>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Make a Donation</h3>

        <div style={categoryStyle}>
          <h4>Combined Support for Farmers</h4>
          <p>Your donation will collectively contribute to the education of farmers' children, debt relief, and farm improvements, ensuring comprehensive support.</p>
          <button style={paymentButtonStyle} onClick={handleUpiClick}>Donate via UPI</button>
          <button style={paymentButtonStyle}>Donate via Bank Transfer</button>
          <button style={paymentButtonStyle}>Donate via Card</button>
          {showUpiDetails && (
            <div style={upiDetailsStyle}>
              <p>UPI ID: <b>123456789@icici</b></p>
              <input
                type="number"
                style={inputStyle}
                placeholder="Enter Amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              {donationAmount && <p>You are donating ₹{donationAmount} via UPI.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonationsPage;
