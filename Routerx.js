import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cardwrapper from './Cardwrapper';
function Home() {
  return (
    <div className = 'Cards'>
    <Cardwrapper/>
    </div>
  )
  
}

function About() {
  return <h2>ℹ️ About Page</h2>,<p>I am sneha,I am studing BCA</p>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>,<p>
    Email us at: <a href="mailto:sneha@snehaakki">snehaakki.com</a>
    Contact no:8596321478
  </p>;
}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;