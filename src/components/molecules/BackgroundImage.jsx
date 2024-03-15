import React from "react";
import { Box, Container } from "@mui/material";

const BackgroundImage = ({children}) => {
  return (
    <Box
      style={{
        backgroundImage: `url('/thunderimage.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh", // Adjust height as needed
        display: "flex",
        flexDirection: "column", // Stack children vertically
        alignItems: "center",
      }}
    >
     <Container maxWidth='xl'>
     {children}
     </Container>
        
       
        </Box>
  );
};

export default BackgroundImage;
