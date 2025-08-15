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
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên';
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSnackbarMessage('Bạn đã đặt Phòng thành Công.');
      setOpenSnackbar(true);
    } else {
      setSnackbarMessage('Vui lòng kiểm tra lại thông tin.');
      setOpenSnackbar(true);
    }
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
        <TextField
          id='fullName'
          label='Họ và Tên'
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
          }}
          variant='standard'
          error={!!errors.fullName}
          helperText={errors.fullName}
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
        />
        <TextField
          id='phone'
          label='Số điện thoại'
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
          }}
          variant='standard'
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{
            border: '1px solid white',
            p: '10px 15px',
            backgroundColor: 'white',
            borderRadius: '9px',
          }}
        />
        <Button
          sx={{
            width: '360px',
            height: '70px',
            backgroundColor: 'transparent',
            border: '2px solid black',
          }}
          type="button"
          onClick={handleSubmit}
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
          message={snackbarMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      </Box>
    </Box>
  );
}

export default BookRoomDetail;
