import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import GroupsIcon from '@mui/icons-material/Groups';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

function Product({ img, sale, price, titleRoom, bedCount, peopleCount, roomType }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 3,
        position: 'relative',
        padding: '0px 0px 30px',
        borderRadius: '20px',
        userSelect: 'none',
        background: 'white',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: 2,
        '&:hover': {
          transform: 'scale(1.04)',
          boxShadow: 8,
        },
      }}
    >
      <img
        src={img}
        alt={img}
        draggable={false}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '265px',
          userSelect: 'none',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <Box sx={{ color: 'white' }}>
        <Typography
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: '#e45154',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
        >
          Giảm {sale} %
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            top: 200,
            left: 25,
            backgroundColor: 'black',
            padding: '15px',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'flex',
          }}
        >
          {(price * 1000).toLocaleString()} VNĐ
          <Typography sx={{ fontWeight: 'light' }}>/ Đêm</Typography>
        </Typography>
      </Box>
      <Box>
        <Typography variant='h4' sx={{ fontFamily: 'THCartoon9' }}>
          {titleRoom}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <LocalHotelIcon></LocalHotelIcon>
            <Typography sx={{ ml: 1, fontSize: '18px' }}>{bedCount}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <GroupsIcon></GroupsIcon>
            <Typography sx={{ ml: 1, fontSize: '18px' }}>
              {peopleCount}
            </Typography>
          </Box>
        </Box>

        <Button
          component={Link}
          to={roomType ? `/detail/${roomType}` : '/detail/don'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            m: '20px 0 0 -10px',
          }}
        >
          <Typography>Chi Tiết</Typography>
          <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Product;
