import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/components/Services' element={<Services/>} />
        <Route path='/components/Contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
