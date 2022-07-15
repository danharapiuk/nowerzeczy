import React from 'react'
import '../scss/Home.scss';

import HomeThreeColumns from '../components/HomeThreeColumns';
import Hero from '../components/Hero';

function Home () {
  return (
    <>
      <Hero />
      <HomeThreeColumns />
      </>
  );
}

export default Home;
