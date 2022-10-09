import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Error from "./components/Error";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/components/About' element={<About/>} />
              <Route path='/components/Services' element={<Services/>} />
              <Route path='/components/Contact' element={<Contact/>} />
              <Route path='/components/Policy' element={<Policy/>} />
              <Route path='/components' element={<Error/>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
