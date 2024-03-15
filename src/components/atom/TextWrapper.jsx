import React from "react";
import { Typography, Grid } from '@mui/material';

export const TextWrapper = ({icon,title,value,unit}) => {
  return (
    <Typography variant="body1" gutterBottom>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          {icon} {/* Adjust the size of the icon as needed */}
        </Grid>
        <Grid item>{title}: {value} {unit}</Grid>
      </Grid>
    </Typography>
  );
};
