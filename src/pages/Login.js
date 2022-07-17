import React from 'react';
import '../scss/Login.scss';
import '../scss/main.scss';
import Heading from '../components/Heading';
import ButtonLogin from '../components/BtnLogin';

const Login = () => {
  return (
    <div class='container px'>
      <Heading
        text='Zaloguj się'
      />

      <div class='form'>
        <label>Email
          <input type='text' placeholder='' />
        </label>
        <label>Hasło
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

export default Login;