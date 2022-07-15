import React from 'react';
import '../scss/Login.scss';
import Decoration from '../assets/Decoration.svg';

const Login = () => {
  return (
    <div class='container test'>
      <h1>Zaloguj się</h1>
      <img src={Decoration} height={33} alt='decoration' className='decoration' />

      <div class='form'>
        <label>Email
          <input type='text' placeholder='' />
        </label>
        <label>Hasło
          <input type='text' placeholder='' />
        </label>
      </div>
<div className='buttony'>
        <button class='login-btn'>Załóz konto</button>
          <button class='login-btn'>Login</button>
          </div>

    </div>
  );
};

export default Login;