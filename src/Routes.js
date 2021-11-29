import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import EditProduct from './pages/EditProduct';
import Product from './pages/Product';
import Login from './pages/Login';

import AppBar from './components/AppBar';

export default function AppRoutes() {
  return (
    <Router>
    	<AppBar />
      <Routes>
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/admin/edit/product/:productId" exact element={<EditProduct />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/product/:productId" exact element={<Product />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}