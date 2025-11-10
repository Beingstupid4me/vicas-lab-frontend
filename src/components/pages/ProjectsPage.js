import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Modal } from '@mui/material';

const projects = [
  { 
    title: 'Low-Power SRAM Design', 
    description: 'Designing and optimizing SRAM for ultra-low power consumption in IoT devices.',
    collaborators: 'Industry Partner A, University B',
    funding: 'Govt. Agency C',
    milestones: ['Initial design complete', 'Tape-out scheduled for Q4 2023']
  },
  { 
    title: 'High-Speed ADC', 
    description: 'A 12-bit, 1GS/s pipeline ADC for next-generation communication systems.',
    collaborators: 'Research Lab D',
    funding: 'Internal Funding',
    milestones: ['Architecture finalized', 'Awaiting simulation results']
  },
  { 
    title: 'AI Hardware Accelerator', 
    description: 'Developing a dedicated hardware accelerator for deep learning inference on the edge.',
    collaborators: 'Startup E',
    funding: 'Venture Capital F',
    milestones: ['Prototype demonstrated', 'Working on power optimization']
  },
  // Add more projects
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProjectsPage = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>{project.description}</Typography>
                <Button size="small" onClick={() => handleOpen(project)}>Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedProject && (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
        >
            <Box sx={style}>
                <Typography id="project-modal-title" variant="h6" component="h2">
                    {selectedProject.title}
                </Typography>
                <Typography id="project-modal-description" sx={{ mt: 2 }}>
                    {selectedProject.description}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Collaborators:</strong> {selectedProject.collaborators}
                </Typography>
                <Typography>
                    <strong>Funding:</strong> {selectedProject.funding}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    <strong>Milestones:</strong>
                    <ul>
                        {selectedProject.milestones.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                </Typography>
            </Box>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectsPage;
