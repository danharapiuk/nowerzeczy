import '../scss/main.scss';
import Heading from './Heading';
import '../scss/WhoWeHelp.scss';
import React, { useState } from "react";


function WhoWeHelp() {
  const [value, setValue] = useState()

  return (
    <section className='whoWeHelp container'>
      <Heading
        text='hello'
      />

      <div className='buttons'>
        <button
        onClick={event => setValue()}></button>

  </div>
      <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
    </section>

  );
}

export default WhoWeHelp;
