import React from 'react'
import '../scss/Home.scss';

import ThreeColumnsHome from '../components/ThreeColumnsHome';
import Hero from '../components/Hero';
import FourSteps from '../components/FourSteps';
import About from '../components/About';
import WhoWeHelp from '../components/WhoWeHelp';


function Home () {
  return (
    <>
      <Hero />
      <ThreeColumnsHome />
      <FourSteps />
      <About />
      <WhoWeHelp />

      </>
  );
}

export default Home;
