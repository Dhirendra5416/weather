import React from "react";
import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { getDayOfWeek,getWindDirection,getRadiationLevel } from "../helper/conversion"
import { Warning, WbSunny,ArrowForward, Speed } from "@mui/icons-material";


const WeatherCard = ({ temperature,day,radiation, Sunhours, windspeed,windDirection }) => {
  // Define a function to determine icon based on temperature value
  const getWeatherIcon = (temperature) => {
    if (temperature >= 30) {
      return <WbSunnyIcon fontSize="large" />;
    } else if (temperature >= 20) {
      return <CloudIcon fontSize="large" />;
    } else {
      return <BeachAccessIcon fontSize="large" />;
    }
  };


  // Define a function to determine color based on temperature value
  const getIconColor = (temperature) => {
    if (temperature >= 30) {
      return "orange";
    } else if (temperature >= 20) {
      return "gray";
    } else {
      return "blue";
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* Icon */}
          <Grid item xs={3}>
            <Box color={getIconColor(temperature)}>{getWeatherIcon(temperature)}</Box>
          </Grid>
          {/* Temperature */}
         
          <Grid item xs={9}>
            <Typography variant="h6" gutterBottom>
            {temperature? temperature:25}°C  {getDayOfWeek(day)} 
            </Typography>
          </Grid>
        </Grid>
         <Grid container spacing={2} alignItems="center">
          {/* Icon */}
          <Grid item xs={3}>
          <Warning/>
           
            <Typography variant="h6" gutterBottom>
              {getRadiationLevel(radiation)}
            </Typography>

          </Grid>
          <Grid item xs={3}>
            <WbSunny/>
            <Typography variant="h6" gutterBottom>
              {Sunhours}h
            </Typography>

          </Grid>
          <Grid item xs={3}>
          <ArrowForward/> 
            <Typography variant="h6" gutterBottom>
              {getWindDirection(windDirection)}
            </Typography>

          </Grid>  
          <Grid item xs={3}>
          <Speed/>
            <Typography variant="h6" gutterBottom>
              {windspeed}mph 
            </Typography>

          </Grid>
         
         
        </Grid>

      </CardContent>
    </Card>
  );
};

export default WeatherCard;
