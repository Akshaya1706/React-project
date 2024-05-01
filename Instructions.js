import React, { useEffect } from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Instructions = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const isLogin =(localStorage.getItem('user')||'').length > 0;
    if(!isLogin){
      navigate(`/`);
    }
  });

  const instructionsList = [
    'Welcome to the company!',
    'Please complete the onboarding process by filling out the necessary forms.',
    'Review the employee handbook for company policies and guidelines.',
    'Reach out to your assigned team leader for any immediate questions or concerns.',
    'Attend the orientation session scheduled for the new employees on Friday at 10:00 AM.',
    'Make sure to set up your email and communication tools following the provided instructions.',
    'Explore the company intranet for additional resources and information.',
  ];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          HR Manager Instructions
        </Typography>
        <List>
          {instructionsList.map((instruction, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemText primary={instruction} />
              </ListItem>
              {index !== instructionsList.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Instructions;
