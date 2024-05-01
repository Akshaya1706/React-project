import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const EmployeeImage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-vector/business-meeting_905719-38.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50vh',
  };

  return (
    <div style={backgroundStyle}>
      <Button variant="outlined" onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </Button>
    </div>
  );
};

export default EmployeeImage;
