import React from 'react';
import Heading from '../components/Heading';
import ButtonLogin from '../components/BtnLogin';
import '../scss/Login.scss';


const Register = () => {
  return (
    <div class='container px'>
      <Heading
        text='Zarejestruj się'
      />

      <div class='form'>
        <label>Email
          <input type='text' placeholder='' />
        </label>
        <label>Hasło
          <input type='text' placeholder='' />
        </label>
        <label>Powtórz hasło
          <input type='text' placeholder='' />
        </label>
      </div>

      <div className='buttons'>
        <div>
        <ButtonLogin 
          text='Zaloguj się'
          link='/login'
        /></div>
        <div><ButtonLogin 
          text='Załóz konto'
          link='/register'
        /></div>
      </div>
      </div>
  );
};

export default Register;