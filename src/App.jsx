// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard';
import AddBook from './AddBook';


function App() {
  return (
    <div className="App">
      <Routes>
     
        <Route path="/add-book" element={<AddBook/>} />
        <Route path="/" element={ <Home />} />
      
      </Routes>
      
    </div>
  );
}

export default App;
