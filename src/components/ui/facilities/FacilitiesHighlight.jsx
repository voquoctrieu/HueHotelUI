import React from 'react';
import { Box, Typography } from '@mui/material';
import TourHueImg from '../../../assets/img/tienich-tour-hue.jpg';

function FacilitiesHighlight() {
  return (
    <Box sx={{ my: 6, background: '#fff', borderRadius: 4, p: 4, boxShadow: 2, textAlign: 'center' }}>
      <Box
        component="img"
        src={TourHueImg}
        alt="Dịch vụ Tour nghe ca Huế trên sông Hương"
        sx={{
          width: 350,
          height: 200,
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 2,
          mb: 2,
        }}
      />
      <Typography variant="body1">Dịch vụ Tour nghe ca Huế trên sông Hương</Typography>
    </Box>
  );
}

export default FacilitiesHighlight;
