import React from 'react';
import '../App.css';
import Mooter from './Mooter';
import Footer from './Footer';

export default function Menu1() {
  return (
    <>
      <div className="one1 container text-center ">
        <h2>Our Beverage Menu</h2>
        <p>Freshly brewed drinks just for you </p>
      </div>
      <Mooter />
      <Footer />
    </>
  );
}
