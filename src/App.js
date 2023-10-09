import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Creative from './components/Creative';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
  <div>
      <Navbar />
      <Hero />
      <Services />
      <Creative />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
