import React, { useState } from 'react';
import { FaTractor } from 'react-icons/fa';
import SearchPopup from '../components/SearchPopup';

function BarterPage() {
  const [productListings, setProductListings] = useState([
    {
      name: 'Used Tractor Tires',
      ownerName: 'Raju Bhai',
      value: '150',
      description: 'Set of 4 used but in good condition tractor tires. Ready for immediate use.',
    },
    {
      name: 'Fertilizer - 50kg Bag',
      ownerName: 'Kisan Lal',
      value: '200',
      description: 'One 50kg bag of high-quality fertilizer, unopened and stored properly.',
    },
    {
      name: 'Harvesting Services',
      ownerName: 'Gopal Verma',
      value: '250',
      description: 'Offering harvesting services for 2 acres of land. Modern equipment and experienced team.',
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    ownerName: '',
    value: '',
    description: '',
  });
  const [barterSuggestions, setBarterSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchedProductName, setSearchedProductName] = useState('');
  const [showPopup, setShowPopup] = useState(false);


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
  const searchContainerStyle = {
    marginBottom: '20px',
    textAlign: 'right',
  };


  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productValue = parseInt(newProduct.value, 10);
    const suggestions = productListings.filter(
      (product) => Math.abs(parseInt(product.value, 10) - productValue) <= 100
    );

    setProductListings([...productListings, newProduct]);
    setBarterSuggestions(suggestions);
    setNewProduct({ name: '', ownerName: '', value: '', description: '' });
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleProductNameSearch = () => {
    setSearchedProductName(searchValue);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSearchValue('');
    setSearchedProductName('');
  };


  const filteredProducts = productListings.filter(product => {
    if (!searchValue) return true;
    return parseInt(product.value, 10) <= parseInt(searchValue, 10);
  });


  return (
    <div style={{ padding: '20px' }}>
      <h2>List Your Product for Barter</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="ownerName"
          placeholder="Your Name"
          value={newProduct.ownerName}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="value"
          placeholder="Product Value"
          value={newProduct.value}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>List Product</button>
      </form>


      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          <h3>New Listings</h3>
          <div style={cardContainerStyle}>
            {filteredProducts.map((product, index) => (
              <div key={index} style={cardStyle}>
                <FaTractor style={iconStyle} />
                <h4>{product.name}</h4>
                <p>Owner: {product.ownerName}</p>
                <p>Value: {product.value}</p>
                <p>{product.description}</p>
                <button style={buttonStyle} onClick={() => alert('Contact farmer for ' + product.name)}>
                  Contact Farmer
                </button>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <div style={searchContainerStyle}>
            <h4>Search by Value or Product</h4>
            <input
              type="text"
              placeholder="Enter product name"
              value={searchValue}
              onChange={handleSearchChange}
              style={inputStyle}
            />
             <button style={buttonStyle} onClick={handleProductNameSearch}>
              Search Product
            </button>
          </div>
          {showPopup && (
            <SearchPopup productName={searchedProductName} onClose={handleClosePopup} />
          )}
          {barterSuggestions.length > 0 && (
            <div>
              <h3>Suggested Products for Barter</h3>
              <div style={cardContainerStyle}>
                {barterSuggestions.map((product, index) => (
                  <div key={index} style={cardStyle}>
                    <FaTractor style={iconStyle} />
                    <h4>{product.name}</h4>
                     <p>Owner: {product.ownerName}</p>
                    <p>Value: {product.value}</p>
                    <p>{product.description}</p>
                    <button style={buttonStyle} onClick={() => alert('Contact farmer for ' + product.name)}>
                      Contact Farmer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BarterPage;
