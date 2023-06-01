import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { displayName, setDisplayName, isLoggedIn, setLoggedIn } = useOutletContext();
  const [validLogin, setValidLogin] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((userData) => {
        if (userData.status !== 401) {
          setDisplayName(userData.username)
          console.log(userData.accessToken)
          localStorage.setItem('jwt', userData.accessToken)
          setLoggedIn(true);
          navigate('/', { state: { user: userData } });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoggedIn(false);
        setValidLogin(false)
      });
  };

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <TextField id="standard-basic" label="Username" variant="standard" onChange={handleUsernameChange} value={username} sx={{marginRight: 1}} required />
        <TextField id="standard-basic1" label="Password" variant="standard" onChange={handlePasswordChange} type='password' sx={{marginRight: 1}} required />
        <Button type="submit" variant="outlined" sc={{margin: 10}} >Login</Button>
      </form>
      {validLogin === false ? <p className='error-message'>Invalid login credentials</p> : null}
      <a href='' className='signup-redirect' onClick={() => navigate('/signup')}>Create an Account</a>
    </div>
  );
}
