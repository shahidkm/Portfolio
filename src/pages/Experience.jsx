import React from 'react';
import M2H from '../components/M2H';
import BridgeonExperience from '../components/Bridgeon';
import Navbar from '../components/NavBar';

export default function Experience() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <div className="pt-16">
        <M2H />
        <BridgeonExperience />
      </div>
    </div>
  );
}
