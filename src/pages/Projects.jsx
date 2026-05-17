import React from 'react';
import LabourLink from '../components/LabourLink';
import Nexfin from '../components/Nexfin';
import Navbar from '../components/NavBar';

export default function Projects() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <div className="pt-16">
        <LabourLink />
        <Nexfin />
      </div>
    </div>
  );
}
