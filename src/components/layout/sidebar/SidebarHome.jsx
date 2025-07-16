import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import SideBar from '../../../assets/img/hoa.jpg';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
function SidebarHome() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', width: '80%' ,mb:'50px'}}>
      <Box sx={{ mt: '120px' }}>
        <Box
          sx={{
            display: 'flex',
            color: 'black',
            width: '450px',
            justifyContent: 'space-around',
          }}
        >
          <Typography sx={{ fontSize: '20px', fontFamily: 'THCartoon9' }}>
            2 Start
          </Typography>
          <Typography sx={{ fontSize: '20px', fontFamily: 'THCartoon9' }}>
            18 Rooms
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: '36px',
            fontFamily: 'VLAMPLE',
            width: '690px',
            textAlign: 'justify',
            p: '60px',
            color:'black'
          }}
        >
          Khách sạn của chúng tôi tọa lạc giữa lòng cố đô Huế, nơi hội tụ nét
          đẹp lịch sử và sự sang trọng hiện đại. Một trải nghiệm nghỉ dưỡng đẳng
          cấp năm sao giữa thiên nhiên thơ mộng.
        </Typography>
        <Button
          sx={{
            width: '225px',
            height: '70px',
            backgroundColor: 'transparent',
            color: 'black',
            cursor: 'pointer',
            borderBottomStyle:'solid',
            borderBottomColor:'black',
            borderBottomWidth: "1px",
            borderRadius:'0',
            ml:'150px'
          }}
          onClick={() => navigate('/aboutUs')}
        >
          <Typography sx={{ textDecoration: 'none', color: 'black' }}>
            Xem thêm về chúng tôi
          </Typography>
          <ArrowRightIcon />
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${SideBar})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '950px',
          height: '620px',
          borderTopLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          mt: '70px',
        }}
      ></Box>
    </Box>
  );
}

export default SidebarHome;
