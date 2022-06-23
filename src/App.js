import React from 'react';
import Navbar from './components/Navbar';
import data from './data/data';

export default function App() {
  console.log(data);
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}
