import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const rooms = [
  { name: 'Phòng Đơn', price: 290, people: 2, sale: 23 },
  { name: 'Phòng Đôi/1Giường', price: 400, people: 2, sale: 25 },
  { name: 'Phòng Đôi/2Giường', price: 420, people: 2, sale: 45 },
  { name: 'Phòng 3 người', price: 500, people: 3, sale: 30 },
  { name: 'Phòng Gia đình', price: 700, people: 4, sale: 25 },
];

function OfferBooking() {
  const [roomCounts, setRoomCounts] = useState(Array(rooms.length).fill(0));
  const [formData, setFormData] = useState({
    gender: 'Mr',
    fullName: '',
    phone: '',
    country: '',
    email: '',
    message: '',
    agree: false,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRoomChange = (index, value) => {
    const updatedCounts = [...roomCounts];
    updatedCounts[index] = parseInt(value);
    setRoomCounts(updatedCounts);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const totalPrice = rooms.reduce((sum, room, idx) => {
    const priceAfterDiscount = room.price * (1 - room.sale / 100);
    return sum + priceAfterDiscount * roomCounts[idx];
  }, 0);

  return (
    <Box sx={{ maxWidth: '900px', margin: 'auto', p: 3 }}>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>
                <strong>Loại Phòng</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Giá/Đêm</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Số Người/Phòng</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Giảm Giá</strong>
              </TableCell>
              <TableCell align='center'>
                <strong>Số Người Muốn đặt</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room, index) => (
              <TableRow key={room.name}>
                <TableCell align='center'>{room.name}</TableCell>
                <TableCell align='center'>{(room.price * 1000).toLocaleString()} VNĐ</TableCell>
                <TableCell align='center'>{room.people}</TableCell>
                <TableCell align='center'>{room.sale} %</TableCell>
                <TableCell align='center'>
                  <Select
                    value={roomCounts[index]}
                    onChange={(e) => handleRoomChange(index, e.target.value)}
                    size='small'
                  >
                    {[...Array(6).keys()].map((i) => (
                      <MenuItem key={i} value={i}>
                        {i}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Tổng tiền dự kiến */}
      <Box sx={{ mb: 3, textAlign: 'right' }}>
        <Typography variant="h6" color="primary">
          Tổng tiền dự kiến: <span style={{ fontWeight: 700 }}>{totalPrice.toLocaleString()} VNĐ</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          (Đã áp dụng giảm giá từng loại phòng)
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '900px', margin: 'auto', p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <TextField
            required
            fullWidth
            label='Họ và Tên'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              required
              fullWidth
              label='Số điện thoại'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </Box>

          <TextField
            required
            fullWidth
            label='Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            required
            fullWidth
            multiline
            minRows={4}
            label='Yêu cầu (Nếu có)'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
              />
            }
            label={
              <Typography variant='body2'>
                {`Tôi đọc và đồng ý với các `}
                <a href='#' style={{ color: '#1490ac' }}>
                  điều khoản & điều kiện
                </a>
                {` của khách sạn.`}
              </Typography>
            }
          />

          <Button variant='contained' color='primary' type="button" onClick={() => setOpenSnackbar(true)}>
            Xác nhận đặt phòng
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
    </Box>
  );
}

export default OfferBooking;
