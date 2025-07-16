import { Box, Typography } from '@mui/material';
import React from 'react';
import BannerBooking from '../../../assets/img/banner-booking.jpg';
import Navbar from '../navbar/Navbar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function HeaderBooking({ img, title }) {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.84) 0%, transparent 20%,transparent 50%, transparent 80%, rgba(0, 0, 0, 0.8) 100%), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '463px',
        borderRadius: '20px',
        mt: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: 'white',
          mt: '20px',
          ml: 10,
        }}
      >
        <LocalPhoneIcon />
        <Typography sx={{ fontSize: '18px' }}>+84 702 679 156</Typography>
      </Box>
      <Navbar />
      <Typography
        variant='h2'
        sx={{ fontFamily: 'THCartoon9', color: 'white', m: '70px auto' , textAlign: "center" }}
      >
       {title}
      </Typography>
    </Box>
  );
}

export default HeaderBooking;
