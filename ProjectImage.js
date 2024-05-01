import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ProjectImage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: 'url("https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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

export default ProjectImage;

