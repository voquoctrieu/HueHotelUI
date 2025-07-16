import { Box, Typography } from '@mui/material';
import React from 'react';

function FacilitiesDetail({ img: Icon, title, description }) {
  return (
    <Box
      sx={{
        display: 'flex',
        w: '190px',
        h: '70px',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Icon sx={{ fontSize: 50 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          ml: '10px',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '16px' }}>{description}</Typography>
      </Box>
    </Box>
  );
}

export default FacilitiesDetail;
