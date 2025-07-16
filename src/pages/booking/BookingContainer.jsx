import { Box } from '@mui/material';
import React from 'react';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import BookRoomForm from '../../components/layout/form/BookRoomForm';
import BookingRoomForm from '../../components/layout/form/BookingRoomForm';
import OfferBooking from '../../components/layout/form/OfferBooking';
import Footer from '../../components/layout/footer/Footer';
import BannerBooking from '../../assets/img/banner-booking.jpg';
function Booking() {
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
      <HeaderBooking img={BannerBooking} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box mt={'100px'}>
          <BookingRoomForm />
        </Box>
        <OfferBooking />
      </Box>
      <Footer />
    </Box>
  );
}

export default Booking;
