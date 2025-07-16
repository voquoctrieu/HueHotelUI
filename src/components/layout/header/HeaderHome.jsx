import { Box, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../navbar/Navbar';
import backgroundImage from '../../../assets/img/hotel.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BookRoomForm from '../form/BookRoomForm';

function HeaderHome() {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.84) 0%, transparent 20%, rgba(0, 0, 0, 0.44) 50%, transparent 80%, rgba(0, 0, 0, 0.8) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '963px',
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
      <Box
        sx={{
          textAlign: 'center',
          color: 'white',
          mb: 20,
        }}
      >
        <Typography variant='h2' sx={{ fontFamily: 'THCartoon9', mt: 40 ,}}>
          Đặt phòng cho kỳ nghỉ của bạn
        </Typography>
        <Typography variant='h5' sx={{ fontFamily: 'THCartoon9', mt: 1 }}>
          Khám phá trải nghiệm mới với HueHotel
        </Typography>
      </Box>

      <BookRoomForm />
    </Box>
  );
}

export default HeaderHome;
