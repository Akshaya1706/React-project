import React, { useState } from 'react';
import {Card,CardContent,CardActions,Typography,Button,Link,Grid,TextField,Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialProject = {
  name: '',
  description: '',
  githubLink: '',
};

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project 1',
      description: 'Most Successfull projects.',
      githubLink: 'https://github.com/topics/hr-manager',
    },
   
    {
      name: 'Project 2',
      description: 'Admin projects.',
      githubLink: 'https://github.com/topics/hr-manager',
    },
   
  ]);

  const [newProject, setNewProject] = useState(initialProject);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    if (newProject.githubLink.trim() !== '') {
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setNewProject(initialProject);
    } else {
      alert('GitHub link is required.');
    }
  };
  

  return (

    <Container>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} navigate={navigate} />
          </Grid>
        ))}
        
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Add New Project
              </Typography>
              <TextField
                fullWidth
                label="Project Name"
                name="name"
                value={newProject.name}
                onChange={handleInputChange}
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Project Description"
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                sx={{ mt: 2 }}
              />
              <TextField
                fullWidth
                label="GitHub Link"
                name="githubLink"
                value={newProject.githubLink}
                onChange={handleInputChange}
                sx={{ mt: 2 }}
              />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleAddProject}>
                Add Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const ProjectCard = ({ project, navigate }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
        
      </CardActions>
    </Card>
  );
};

export default Projects;
