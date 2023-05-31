import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/signup', { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const userData = response.data;
        navigate('/', { state: { user: userData } });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
          required
        />
        <input
          value={password}
          type="password"
          onChange={handlePasswordChange}
          placeholder="password"
          required
        />
        <button
          type="button"
          onClick={handleSubmit} >
          Sign up
        </button>
      </form>
      <button onClick={() => navigate('/login')}>Login Page</button>
    </div>
  );
}