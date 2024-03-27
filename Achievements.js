import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const AchievementCard = ({ id, employeeName, projectsCompleted, handleProjectSubmit }) => (
  <Card key={id} style={{ marginBottom: '10px' }}>
    <CardContent>
      <Typography variant="h6">
        <strong>{employeeName}</strong> has completed{' '}
        <strong>{projectsCompleted}</strong> projects.
      </Typography>
      <Button
        onClick={() => handleProjectSubmit(id)}
        variant="contained"
        color="primary"  
        style={{ marginTop: '10px' }}  
      >
        Submit Project
      </Button>
    </CardContent>
  </Card>
);

const Achievements = () => {
  const navigate = useNavigate();

  const [achievementsData, setAchievementsData] = useState([
    { id: 1, employeeName: 'Akshaya', projectsCompleted: 4 },
    { id: 2, employeeName: 'Darsanaa', projectsCompleted: 12 },
    { id: 3, employeeName: 'Geetha Sri', projectsCompleted: 18 },
    { id: 4, employeeName: 'GopikaSri', projectsCompleted: 20 },
    { id: 5, employeeName: 'Bhavanishree', projectsCompleted: 10  },
  ]);

  const handleProjectSubmit = (id) => {
    setAchievementsData((prevData) =>
      prevData.map((achievement) =>
        achievement.id === id
          ? { ...achievement, projectsCompleted: achievement.projectsCompleted + 1 }
          : achievement
      )
    );
  };

  return (
    <div>
    
      
      {achievementsData.map((achievement) => (
        <AchievementCard
          key={achievement.id}
          id={achievement.id}
          employeeName={achievement.employeeName}
          projectsCompleted={achievement.projectsCompleted}
          handleProjectSubmit={handleProjectSubmit}
        />
      ))}
    </div>
  );
};

export default Achievements;
