import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';

function BookRoomDetail() {
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

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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
        <Button
          sx={{
            width: '360px',
            height: '70px',
            backgroundColor: 'transparent',
            border: '2px solid black',
          }}
          type="button"
          onClick={() => setOpenSnackbar(true)}
        >
          <Typography
            sx={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}
          >
          Đặt Ngay
          </Typography>
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message="Bạn đã đặt Phòng thành Công."
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      </Box>
    </Box>
  );
}

export default BookRoomDetail;
