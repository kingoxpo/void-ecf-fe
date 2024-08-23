import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Callback from './Callback';
import reportWebVitals from './reportWebVitals';
import ExcelUpload from "./ExcelUpload";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/callback" element={<Callback />} />
        <Route path="/excel" element={<ExcelUpload />} /> {/* Define the route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
