import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import './Login.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState();
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const isPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/i.test(password);

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      setFormValid('Email is invalid.');
    } else {
      setEmailError(false);
      setFormValid(null);
    }
  };

  const handlePassword = () => {
    if (!isPassword(passwordInput)) {
      setPasswordError(true);
      setFormValid('Password mismatched.');
    } else {
      setPasswordError(false);
      setFormValid(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (emailError || !emailInput) {
      setFormValid('Email is invalid.');
      return;
    }
    if (passwordError || !passwordInput) {
      setFormValid('Password mismatched.');
      return;
    }
    setFormValid(null);
    setSuccess('Login Successfully');
    localStorage.setItem('user', emailInput);
    navigate(`/`);

    console.log('Email: ' + emailInput);
    console.log('Password: ' + passwordInput);
    console.log('Remember User: ' + rememberMe);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container login">
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
        <p>
          <TextField
            id="standard-basic"
            error={emailError}
            label="Email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
            onBlur={handleEmail}
            variant="standard"
            fullWidth
            size="small"
          
          />
          

      
        </p>
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <p>
          <InputLabel error={passwordError} htmlFor="standard-adornment-password" >
            Password
          </InputLabel>
          <Input
            fullWidth
            error={passwordError}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onBlur={handlePassword}
            onChange={(event) => setPasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              
            }
          />
        </p>
      </FormControl>

      <div>
        <Checkbox onChange={(event) => setRememberMe(event.target.checked)} inputProps={{ 'aria-label': 'controlled' }} />
        {' '}
        Remember Me
      </div>
      <p>
        <Button onClick={handleSubmit} variant="contained" startIcon={<LoginIcon />}>
          Login
        </Button>
      </p>
      <p>
        Don't have an account? <Link to="/register">Signup</Link>
      </p>
      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
      <p>{success && <Alert severity="success">{success}</Alert>}</p>
    </div>
  );
}

export default Login;
