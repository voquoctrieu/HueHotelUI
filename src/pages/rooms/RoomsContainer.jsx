import React from 'react';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import Footer from '../../components/layout/footer/Footer';
import { Box } from '@mui/material';
import BannerBooking from '../../assets/img/banner-room.jpg';
import RoomsProduct from '../../components/layout/Room/RoomsProduct';

function RoomsContainer() {
  return (
    <Box
      sx={{
        width: '1500px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        borderRadius: '20px',
      }}
    >
      <HeaderBooking img={BannerBooking} title={'PHÒNG'} />
      <RoomsProduct />
      <Footer />
    </Box>
  );
}

export default RoomsContainer;
