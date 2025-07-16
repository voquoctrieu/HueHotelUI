import { Box } from '@mui/material';
import HomeContainer from './pages/home/HomeContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Booking from './pages/booking/BookingContainer';
import Rooms from './pages/rooms/RoomsContainer';
import Detail from './pages/detail/Detail';
import Services from './pages/services/Services';
import AboutUs from './pages/aboutUs/AboutUs';
import React from 'react';

function App() {
  // Nút Back to Top
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Box sx={{ width: '100%', backgroundColor: '#5d5d5d0f' }}>
      <Router basename="/HueHotelUI">
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/detail/:roomType' element={<Detail />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </Router>
      {/* Nút Back to Top */}
      {show && (
        <Box onClick={scrollToTop} sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 48,
          height: 48,
          bgcolor: '#1976d2',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          cursor: 'pointer',
          boxShadow: 6,
          zIndex: 9999,
          transition: 'background 0.2s',
          '&:hover': { bgcolor: '#1565c0' },
        }}>
          ↑
        </Box>
      )}
    </Box>
  );
}

export default App;
