import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Product from './pages/Product';

import AppBar from './components/AppBar';

export default function AppRoutes() {
  return (
    <Router>
    	<AppBar />
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/product/:productId" exact element={<Product />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}