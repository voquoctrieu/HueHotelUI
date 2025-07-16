import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';

function BookingRoomForm() {
  const [checkInDate, setCheckInDate] = React.useState(
    new Date().toISOString().split('T')[0]
  );
  const [checkOutDate, setCheckOutDate] = React.useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split('T')[0]
  );
  const [adults, setAdults] = React.useState(1);
  const [children, setChildren] = React.useState(0);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const textFieldSx = {
    flex: '0 0 45%',
    border: '1px solid white',
    p: '10px 15px',
    backgroundColor: '#1490ac',
    borderRadius: '9px',
    '& .MuiSvgIcon-root': { color: 'white' },
  };

  const inputLabelStyle = { color: 'white' };
  const inputStyle = { color: 'white' };

  return (
    <Box
      component='form'
      sx={{
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexGrow:2,
          color: 'white',
          backgroundColor:'#14404a',
          padding:'40px 5px',
          borderRadius:'10px',
          gap:'20px'
        }}
      >
        <TextField
          id='check-in-date'
          label='Check-in'
          type='date'
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          InputLabelProps={{ shrink: true, style: inputLabelStyle }}
          InputProps={{ style: inputStyle }}
          sx={textFieldSx}
          variant='standard'
        />
        <TextField
          id='check-out-date'
          label='Check-out'
          type='date'
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          InputLabelProps={{ shrink: true, style: inputLabelStyle }}
          InputProps={{ style: inputStyle }}
          sx={textFieldSx}
          variant='standard'
        />
        <TextField
          id='adults'
          select
          label='Người lớn'
          value={adults}
          onChange={handleAdultsChange}
          variant='standard'
          InputLabelProps={{ shrink: true, style: inputLabelStyle }}
          InputProps={{ style: inputStyle }}
          sx={textFieldSx}
        >
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number + 1} value={number + 1}>
              {number + 1}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='children'
          select
          label='Trẻ em'
          value={children}
          onChange={handleChildrenChange}
          variant='standard'
          InputLabelProps={{ shrink: true, style: inputLabelStyle }}
          InputProps={{ style: inputStyle }}
          sx={textFieldSx}
        >
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {/* Liên hệ trực tiếp */}
      <Box sx={{
        background: '#fff',
        color: '#222',
        borderRadius: '10px',
        boxShadow: 2,
        mt: 20,
        p: 3,
        textAlign: 'left',
        maxWidth: 600,
        mx: 'auto',
      }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Liên hệ trực tiếp</Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <b>Địa chỉ:</b> 1/142 Nguyễn Sinh Cung, Phường Vỹ Dạ, Thành phố Huế, Thừa Thiên – Huế.
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          <b>SĐT:</b> <a href="tel:0702679156" style={{ color: '#1490ac', textDecoration: 'none' }}>0702679156</a>
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <b>Email:</b> <a href="mailto:22T1020774@husc.edu.vn" style={{ color: '#1490ac', textDecoration: 'none' }}>22T1020774@husc.edu.vn</a>
        </Typography>
        <Box sx={{ mt: 1, mb: 1 }}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=1/142+Nguyễn+Sinh+Cung,+Vỹ+Dạ,+Huế,+Vietnam&output=embed"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <a
          href="https://www.google.com/maps/place/1+Nguyễn+Sinh+Cung,+Vỹ+Dạ,+Thành+phố+Huế,+Thừa+Thiên+Huế,+Vietnam"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1490ac', fontWeight: 500 }}
        >
          Xem bản đồ lớn hơn
        </a>
      </Box>
    </Box>
  );
}

export default BookingRoomForm;
