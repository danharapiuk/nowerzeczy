import React from 'react';
import Heading from '../components/Heading';
import Button from '../components/Btn';
import '../scss/main.scss';


function Wylogowano() {
  return (
    <div class='container px'>
      <Heading
        text='Wylogowanie nastąpiło pomyślnie'
        />

        <Button
          text='Strona główna'
          link='/'
        />
    </div>
  );
}

export default Wylogowano
