import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const WeatherCloudIcon = ({ cloudCover }) => {
  let icon = null;
  let iconColor;

  if (cloudCover <= 2) {
    icon = <WbSunnyIcon />;
    iconColor = 'orange'; // Color for mostly sunny/clear sky
  } else if (cloudCover <= 5) {
    icon = <WbSunnyIcon />;
    iconColor = 'yellow'; // Color for partly cloudy
  } else if (cloudCover <= 8) {
    icon = <CloudQueueIcon />;
    iconColor = 'grey'; // Color for mostly cloudy
  } else {
    icon = <CloudIcon />;
    iconColor = 'darkgrey'; // Color for overcast
  }

  return (
   
      <div style={{ display: 'flex', justifyContent:"center", alignItems: 'center' }}>
          {React.cloneElement(icon, { sx: { color: iconColor, fontSize: 40 } })}
          <Typography>{cloudCover}0% Cloud Cover</Typography>
        </div>
   
  );
};

export default WeatherCloudIcon;
