import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AchievementsImage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6RdV35pKg_Bronz0NHEBk9uxMefsCL3OQw&usqp=CAU")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50vh',
    width:'97vw'
  };

  return (
    <div style={backgroundStyle}>
      <Button variant="outlined" onClick={() => navigate('/')}>
        <ArrowBackIcon />
      </Button>
    </div>
  );
};

export default AchievementsImage;
