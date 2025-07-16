import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Banguoi from '../../../assets/img/3nguoi.jpg';
import Bonnguoi from '../../../assets/img/4nguoi.jpg';
import Don from '../../../assets/img/don.jpg';
import Doi2giuong from '../../../assets/img/doi2giuong.jpg';
import Product from '../../ui/product/Product';
import Hoa from '../../../assets/img/hoa.jpg';

function RoomsProduct() {
  const styleProduct = {
    flex: '0 0 25%',
    p: '0px',
  };

  const rooms = [
    {
      img: Hoa,
      sale: 30,
      price: 290,
      titleRoom: 'Phòng Đơn',
      bedCount: '1 Giường Đơn',
      peopleCount: 1,
      type: 'don',
    },
    {
      img: Don,
      sale: 30,
      price: 400,
      titleRoom: 'Phòng Đôi/1Giường',
      bedCount: '1 Giường Đôi',
      peopleCount: 2,
      type: 'doi1giuong',
    },
    {
      img: Doi2giuong,
      sale: 30,
      price: 420,
      titleRoom: 'Phòng Đôi/2Giường',
      bedCount: '2 Giường Đơn',
      peopleCount: 2,
      type: 'doi2giuong',
    },
    {
      img: Banguoi,
      sale: 30,
      price: 500,
      titleRoom: 'Phòng 3 Người',
      bedCount: '3 Giường Đơn',
      peopleCount: 3,
      type: 'ba',
    },
    {
      img: Bonnguoi,
      sale: 30,
      price: 700,
      titleRoom: 'Phòng Gia Đình',
      bedCount: '2 Giường Đôi',
      peopleCount: 4,
      type: 'giadinh',
    },
  ];

  const [filter, setFilter] = React.useState({
    price: '',
    people: '',
    type: '',
  });

  const filteredRooms = rooms.filter(room => {
    const matchPrice = filter.price ? room.price <= parseInt(filter.price) : true;
    const matchPeople = filter.people ? room.peopleCount === parseInt(filter.people) : true;
    const matchType = filter.type ? room.type === filter.type : true;
    return matchPrice && matchPeople && matchType;
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 4,
        position: 'relative',
        m: '50px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h2' sx={{ fontFamily: 'THCartoon9' }}>
          Phòng nghỉ giữa cố đô
        </Typography>
        <Typography
          variant='h6'
          sx={{ m: '30px auto', width: '60%', textAlign: 'center' }}
        >
          Phòng nghỉ ấm cúng, mang hơi thở dịu dàng của xứ Huế. Nội thất được
          bày trí tinh tế, kết hợp hài hòa giữa nét hiện đại và chút hoài cổ,
          mang lại cảm giác thân thuộc như đang ở chính ngôi nhà nhỏ giữa lòng
          cố đô.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 5, justifyContent: 'center' }}>
        <select value={filter.price} onChange={e => setFilter(f => ({ ...f, price: e.target.value }))} style={{ padding: '16px 32px', borderRadius: 10, fontSize: 20, minWidth: 220, border: '2px solid #1976d2', fontWeight: 600, color: '#1976d2', background: '#f5faff', boxShadow: '0 2px 8px #1976d233' }}>
          <option value=''>Tất cả giá</option>
          <option value='400'>Dưới 400.000 VNĐ</option>
          <option value='500'>Dưới 500.000 VNĐ</option>
          <option value='700'>Dưới 700.000 VNĐ</option>
        </select>
        <select value={filter.people} onChange={e => setFilter(f => ({ ...f, people: e.target.value }))} style={{ padding: '16px 32px', borderRadius: 10, fontSize: 20, minWidth: 220, border: '2px solid #1976d2', fontWeight: 600, color: '#1976d2', background: '#f5faff', boxShadow: '0 2px 8px #1976d233' }}>
          <option value=''>Tất cả số người</option>
          <option value='1'>1 Người</option>
          <option value='2'>2 Người</option>
          <option value='4'>4 Người</option>
        </select>
        <select value={filter.type} onChange={e => setFilter(f => ({ ...f, type: e.target.value }))} style={{ padding: '16px 32px', borderRadius: 10, fontSize: 20, minWidth: 220, border: '2px solid #1976d2', fontWeight: 600, color: '#1976d2', background: '#f5faff', boxShadow: '0 2px 8px #1976d233' }}>
          <option value=''>Tất cả loại phòng</option>
          <option value='don'>Phòng Đơn</option>
          <option value='doi1giuong'>Phòng Đôi/1Giường</option>
          <option value='doi2giuong'>Phòng Đôi/2Giường</option>
          <option value='ba'>Phòng 3 Người</option>
          <option value='giadinh'>Phòng Gia Đình</option>
        </select>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 5,
          justifyContent: 'center',
        }}
      >
        {filteredRooms.map((room, idx) => (
          <Box sx={styleProduct} key={idx}>
            <Product
              img={room.img}
              sale={room.sale}
              price={room.price}
              titleRoom={room.titleRoom}
              bedCount={room.bedCount}
              peopleCount={room.peopleCount + ' Người'}
              roomType={room.type || 'don'}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '80%',
          backgroundColor: '#d3d2d266',
          top: 0,
          borderRadius: '25px',
          zIndex: -1,
        }}
      ></Box>
    </Box>
  );
}

export default RoomsProduct;
