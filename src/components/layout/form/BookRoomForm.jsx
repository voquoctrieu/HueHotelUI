import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

function BookRoomForm() {
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

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: { xs: '100%', sm: '25ch' } },
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <TextField
          id='check-in-date'
          label='Check-in'
          type='date'
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
          variant='standard'
        />
        <TextField
          id='check-out-date'
          label='Check-out'
          type='date'
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
          variant='standard'
        />
        <TextField
          id='adults'
          select
          label='Người lớn'
          value={adults}
          onChange={handleAdultsChange}
          variant='standard'
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
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
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
        >
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
}

export default BookRoomForm;
