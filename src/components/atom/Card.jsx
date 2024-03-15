import React from 'react'

import { Card, CardContent, Typography } from '@mui/material';

const CardWrapper = ({value,unit,title}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
          {value}
          <Typography variant="caption" component="span" sx={{ fontSize: '1rem', color: 'text.secondary', marginLeft: 1 }}>
            {unit}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardWrapper;