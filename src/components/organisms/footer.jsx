import React from 'react';
import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5", 
        padding: "60px", 
        textAlign: "center", 
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1">
          Developed by @Dhirendra
        </Typography>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/dhirendra-pratap-maurya-956110135"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.github.com/Dhirendra5416?tab=overview&from=2024-02-01&to=2024-02-06 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
