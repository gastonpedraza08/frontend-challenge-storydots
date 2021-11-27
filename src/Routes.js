import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';

import AppBar from './components/AppBar';

export default function AppRoutes() {
  return (
    <Router>
    	<AppBar />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}