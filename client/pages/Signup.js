import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validSignup, setValidSignup] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 409) {
          setValidSignup(false);
          return undefined
        } else {
          setValidSignup(true);
          return response.json();
        }
      })
      .then((username) => {  
        if (username) navigate('/', { state: { user: username } });
      })
      .catch((error) => {
        console.log(error);
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
      {validSignup === false ? <p className='error-message'>Invalid login credentials</p> : null}
    </div>
  );
}