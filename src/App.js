import React from 'react';
import Navbar from './components/Navbar';
import Place from './components/Place';
import data from './data/data';

export default function App() {
  const places = data.map((place) => {
    return <Place key={place.id} {...place} />;
  });

  return (
    <div className="container">
      <Navbar />
      {places}
    </div>
  );
}
