
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Geofence from './components/Geofence';
import SwapStations from './components/SwapStations';
import Rentals from './components/Rentals';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <div className="bg-walor-dark">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Geofence />
        <SwapStations />
        <Rentals />
        <Contact />
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
