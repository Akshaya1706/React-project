import React, { useState } from 'react';
import Button from '@mui/material/Button';
import RegisterIcon from '@mui/icons-material/HowToReg';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; 
import { FormControl } from '@mui/material';
import './Register.css';

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const isPassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/i.test(
    password
  );

function Register() {
  const navigate = useNavigate();

  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [formValid, setFormValid] = useState('');
  const [success, setSuccess] = useState('');

  const handleUsername = () => {
    if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 20) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePassword = () => {
    if (!isPassword(passwordInput)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);

    if (!usernameInput || usernameInput.length < 5 || usernameInput.length > 20) {
      setFormValid('Username is between 5-20 characters long.');
      return;
    }

    if (!isEmail(emailInput)) {
      setFormValid('Email is invalid.');
      return;
    }

    if (!isPassword(passwordInput)) {
      setFormValid(
        'Password must be a combination of lowercase, uppercase, numbers, and special characters to a maximum of 8.'
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/register', {
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
      });

      console.log('Registration successful:', response.data);
      setSuccess('Registered Successfully');

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setFormValid('Registration failed. Please try again.');
    }
  };

  return (
    <div className='register'>
      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
        <TextField
          id='standard-basic'
          error={usernameError}
          label='Username'
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          onBlur={handleUsername}
          variant='standard'
          size='small'
        />
      </FormControl>
      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
        <TextField
          id='standard-basic'
          error={emailError}
          label='Email'
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          onBlur={handleEmail}
          variant='standard'
          size='small'
        />
      </FormControl>
      <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard" >
        <TextField
          id='standard-basic'
          error={passwordError}
          label='Password'
          type='password'
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
          onBlur={handlePassword}
          variant='standard'
          size='small'
        />
      </FormControl>
      <Button onClick={handleSubmit} variant='contained' startIcon={<RegisterIcon />}>
        Register
      </Button>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
      {formValid && <Alert severity='error'>{formValid}</Alert>}
      {success && <Alert severity='success'>{success}</Alert>}
    </div>
  );
}
export default Register;
