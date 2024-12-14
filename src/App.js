import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar'; // Import the Navbar component
import Dashboard from './pages/Dashboard'; // Import the Dashboard page
import AddProduct from './pages/AddProduct'; // Import the AddProduct page

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        {/* Define routes for the Dashboard and AddProduct pages */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
