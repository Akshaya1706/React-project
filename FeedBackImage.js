import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const FeedbackImage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: 'url("https://www.shutterstock.com/image-vector/feedback-concept-illustration-idea-reviews-600nw-1470642089.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '70vh',
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

export default FeedbackImage;
