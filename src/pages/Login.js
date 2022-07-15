import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <label>Email
<input type='text' placeholder='e-mail' />
      </label>
      <label>Hasło
         <input type='text' placeholder='hss' />
      </label>
     
      <button>Login</button>
    </div>
  );
};

export default Login;