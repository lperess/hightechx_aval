import React, { useState } from 'react';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { setLocalStorage } from '../services/localStorage';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const encryptedPassword = md5(password);
    api.post('/login', { email, password: encryptedPassword })
      .then((res) => {
        setLocalStorage('token', res.data);
        navigate('/usermanagement', { replace: true });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="emailInputLogin">
        E-mail:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="name@example.com"
          id="emailInputLogin"
        />
      </label>

      <label htmlFor="passwordInputLogin">
        Senha:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="passwordInputLogin"
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
