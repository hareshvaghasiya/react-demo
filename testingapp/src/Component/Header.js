import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Header() {
    
        
     
  return (
    <div className='headerPart'>
      This is Good test!
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
