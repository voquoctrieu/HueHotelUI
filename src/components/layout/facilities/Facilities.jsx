import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import TourHueImg from '../../../assets/img/tienich-tour-hue.jpg';
import NhaHangChayImg from '../../../assets/img/tienich-nhahang-chay.jpg';
import NhaHangAAImg from '../../../assets/img/tienich-nhahang-aa.jpg';
import XeSanBayImg from '../../../assets/img/tienich-xe-sanbay.jpg';
import ThueXeImg from '../../../assets/img/tienich-thuexe.jpg';
import ViTriDacBietImg from '../../../assets/img/tienich-vitridacbiet.jpg';
import WifiIcon from '../../../assets/Icon/wifi.png';
import BeBoiIcon from '../../../assets/Icon/be-boi.png';
import GymIcon from '../../../assets/Icon/gym.png';
import SpaIcon from '../../../assets/Icon/spa.png';
import CarIcon from '../../../assets/Icon/car.png';
import KetsIcon from '../../../assets/Icon/kets.png';
import AnSangIcon from '../../../assets/Icon/an-sansg.png';

const facilities = [
  { image: TourHueImg, description: 'Dịch vụ Tour nghe ca Huế trên sông Hương' },
  { image: NhaHangChayImg, description: 'Nhà hàng chay với hơn 50 món.' },
  { image: NhaHangAAImg, description: 'Nhà hàng với các món Á – Âu.' },
  { image: XeSanBayImg, description: 'Dịch vụ xe đưa đón sân bay.' },
  { image: ThueXeImg, description: 'Dịch vụ cho thuê xe Ô tô, xe máy,\nxe đạp dạo quanh thành phố.' },
  { image: ViTriDacBietImg, description: 'Vị trí gần trung tâm, khu phố Tây, phố đi bộ,\ncồn Hến, cầu tràng tiền, chợ Đông Ba.' },
];

const facilityIcons = [
  { icon: WifiIcon, label: 'Wifi' },
  { icon: BeBoiIcon, label: 'Bể bơi' },
  { icon: GymIcon, label: 'Gym' },
  { icon: SpaIcon, label: 'Spa' },
  { icon: CarIcon, label: 'Xe đưa đón' },
  { icon: KetsIcon, label: 'An toàn' },
  { icon: AnSangIcon, label: 'Ẩm thực' },
];

function Facilities() {
  return (
    <Box sx={{ width: '100%', mb: '100px' }}>
      <Typography
        variant='h2'
        sx={{
          fontFamily: 'THCartoon9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          m: '100px 0',
        }}
      >
        Những tiện ích giữa lòng cố đô
      </Typography>
      <Box sx={{ width: '100%' }}>
        {/* Hàng trên */}
        <Grid container spacing={4} justifyContent="center">
          {facilities.slice(0, 3).map((item, idx) => (
            <Grid key={idx}>
              <Box sx={{ textAlign: 'center' }}>
                {item.image && (
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.description}
                    sx={{
                      width: 400,
                      height: 200,
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 1,
                      mx: 'auto',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  />
                )}
                <Typography variant="body2" sx={{ fontSize: 15, whiteSpace: 'pre-line', mt: 1 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Hàng dưới */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {facilities.slice(3, 6).map((item, idx) => (
            <Grid key={idx+3}>
              <Box sx={{ textAlign: 'center' }}>
                {item.image && (
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.description}
                    sx={{
                      width: 400,
                      height: 200,
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: 2,
                      boxShadow: 1,
                      mb: 1,
                      mx: 'auto',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }}
                  />
                )}
                <Typography variant="body2" sx={{ fontSize: 15, whiteSpace: 'pre-line', mt: 1 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Icon tiện ích */}
        <Box sx={{ width: '100%', mt: 6 }}>
          <Grid container spacing={4} justifyContent="center">
            {facilityIcons.map((item, idx) => (
              <Grid key={idx}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.label}
                    sx={{
                      width: 65,
                      height: 65,
                      objectFit: 'contain',
                      mb: 1,
                      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.15)' }
                    }}
                  />
                  <Typography variant="body2" sx={{ fontSize: 14, fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Facilities;
