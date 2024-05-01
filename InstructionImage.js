import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const InstructionImage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: 'url("https://thumbs.dreamstime.com/b/instructions-blue-folder-guidebook-concept-96478893.jpg")',
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

export default InstructionImage;
