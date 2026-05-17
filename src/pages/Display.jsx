import React from 'react';
import Home from './Home';
import Profession from './Profession';
import Navbar from '../components/NavBar';

export default function Display() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <Home />
      <Profession />
    </div>
  );
}
