import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import FormPage from './components/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;