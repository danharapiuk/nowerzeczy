import React from 'react'
import '../scss/Home.scss';

import ThreeColumnsHome from '../components/ThreeColumnsHome';
import Hero from '../components/Hero';
import FourSteps from '../components/FourSteps';


function Home () {
  return (
    <>
      <Hero />
      <ThreeColumnsHome />
      <FourSteps />

      </>
  );
}

export default Home;
