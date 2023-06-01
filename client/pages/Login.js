import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useOutletContext } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorStateMessage, setErrorStateMessage] = useState('');
  const [userName, setUserName] = useOutletContext();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/login', { username, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        // Handle the response data
        console.log(response.data);
        setUserName(username);
        navigate('/home');
      })
      .catch(error => {
        // Handle any errors
        const { data, ... other} = error.response;
        console.error('Error:', data.error);
        setErrorStateMessage('Login failed. Check your username/password.');
      });
    
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      
      <span> {errorStateMessage} </span>
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
        <div className="button-container">
        <button
          type="submit"
          onClick={handleSubmit} 
        >
          Login
        </button>
          
        </div>
      <didv className="button-container">
        
      <button onClick={() => navigate('/signup')}>Sign Up Page</button>
      </didv>
      </form>
    </div>
  );
}
