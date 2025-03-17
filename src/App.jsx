import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BarterPage from './pages/BarterPage';
import SellPage from './pages/SellPage';
import DonationsPage from './pages/DonationsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/barter" element={<BarterPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer /> {/* Include Footer at the bottom */}
    </Router>
  );
}

export default App;
