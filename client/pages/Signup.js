import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useOutletContext } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorStateMessage, setErrorStateMessage] = useState('');
  const [userName, setUserName] = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/signup', { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setUserName(username);
        const userData = response.data;
        navigate('/', { state: { user: userData } });
      })
      .catch(error => {
        const { data, ... other} = error.response;
        console.error('Error:', data.error);
        setErrorStateMessage(data.error);
      });
  }


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
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
        <div className='button-container'>

        <button
          type="button"
          onClick={handleSubmit} >
          Sign up
        </button>
        </div>
      </form>
      
      <div className='button-container outside'>

      <button onClick={() => navigate('/login')}>Login Page</button>
      </div>
      
      
    </div>
  );
}