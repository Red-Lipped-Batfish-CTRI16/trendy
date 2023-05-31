import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((userData) => {
        if (userData.status !== 401) {
          setLoggedIn(true);
          navigate('/', { state: { user: userData } });
          // conditionally render thing
        }
      })
      .catch((error) => {
        console.log(error);
        setLoggedIn(false);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
          type="submit"
          onClick={handleSubmit} 
        >
          Login
        </button>
      </form>
      <button onClick={() => navigate('/signup')}>Sign Up Page</button>
      {loggedIn === false ? <p className='error-message'>Invalid login credentials</p> : null}
    </div>
  );
}
