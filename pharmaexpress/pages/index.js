import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/signin', { username, password })
      .then(response => {
        const { success } = response.data;
        if (success) {
          window.location.href = '/home';
        } else {
          setError(response.data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;