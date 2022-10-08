import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Error from "./components/Error";
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
         <Switch>
          <Route path='/' element={<Home/>} />
          <Route path='/components/About' element={<About/>} />
          <Route path='/components/Services' element={<Services/>} />
          <Route path='/components/Contact' element={<Contact/>} />
          <Route path='/components/Policy' element={<Policy/>} />
          <Route path='/components' element={<Error/>} />
         </Switch>
      <Footer />
      </div>
     </Router>
  );
}

export default App;
