import React, { useState } from 'react';
import { FaCarrot, FaShoppingCart, FaTags } from 'react-icons/fa';

function SellPage() {
  const [cropListings, setCropListings] = useState([
    {
      name: 'Organic Tomatoes',
      farmerName: 'John Doe',
      quantity: '100 kg',
      price: '2.50',
      description: 'Freshly harvested organic tomatoes, perfect for salads and cooking.',
    },
    {
      name: 'Golden Wheat',
      farmerName: 'Jane Smith',
      quantity: '5 tons',
      price: '300',
      description: 'High-quality golden wheat, ideal for baking and milling.',
    },
  ]);
  const [newCrop, setNewCrop] = useState({
    name: '',
    farmerName: '',
    price: '',
    quantity: '',
    description: '',
  });

  const inputStyle = {
    margin: '10px 0',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: 'calc(100% - 20px)',
  };
  const textareaStyle = {
    margin: '10px 0',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: 'calc(100% - 20px)',
    height: '100px',
  };
  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    margin: '10px 0',
  };
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'flex-start',
    marginTop: '20px',
  };
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '300px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };
  const iconStyle = {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#4CAF50',
  };

  const handleInputChange = (e) => {
    setNewCrop({ ...newCrop, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCropListings([...cropListings, newCrop]);
    setNewCrop({ name: '', farmerName: '', price: '', quantity: '', description: '' }); // Reset form
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2><FaTags style={{ marginRight: '10px' }} />Sell Your Crops</h2>
      <p>List your crops for sale here. Buyers can purchase them directly.</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="farmerName"
          placeholder="Your Name"
          value={newCrop.farmerName}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Crop Name"
          value={newCrop.name}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity (e.g., in kg/tons)"
          value={newCrop.quantity}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price per unit (INR)"
          value={newCrop.price}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newCrop.description}
          onChange={handleInputChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>List Crop for Sale</button>
      </form>

      <h3><FaShoppingCart style={{ marginRight: '10px' }} />Available Crops for Sale</h3>
      <div style={cardContainerStyle}>
        {cropListings.map((crop, index) => (
          <div key={index} style={cardStyle}>
            <FaCarrot style={iconStyle} />
            <h4>{crop.name}</h4>
            <p>Farmer: {crop.farmerName}</p>
            <p>Quantity: {crop.quantity}</p>
            <p>Price: ₹{crop.price} per unit</p>
            <p>{crop.description}</p>
            <button style={buttonStyle} onClick={() => alert('Buy ' + crop.name + ' from ' + crop.farmerName)}>
              Buy Crop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellPage;
