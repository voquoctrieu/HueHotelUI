import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import BannerBooking from '../../assets/img/banner-booking.jpg';
import Toilet from '../../assets/img/tolet.jpg';
import AboutUsImg from '../../assets/img/aboutus1.jpg';
import Footer from '../../components/layout/footer/Footer';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <Box
      sx={{
        width: '1500px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        borderRadius: '20px',
      }}
    >
      <HeaderBooking img={BannerBooking} title={'VỀ CHÚNG TÔI'} />
      <Box
        sx={{
          width: '60%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' fontFamily={'THCartoon9'} mt={'60px'}>
          Trải nghiệm Giữa Lòng Cố Đô
        </Typography>
        <Typography variant='h6' color='#717171' mt={'60px'} width={'80%'}>
          Tận hưởng sự bình yên giữa những di tích lịch sử và dòng sông Hương
          thơ mộng. Chúng tôi mang đến cho bạn một không gian thư giãn, lý tưởng
          để khám phá vẻ đẹp và văn hóa của cố đô.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 0',
          gap: 4,
          flexWrap: 'wrap',
          mb: '60px',
          position: 'relative',
        }}
      >
        <Box
          component='img'
          src={Toilet}
          alt={Toilet}
          sx={{
            width: '45%',
            height: '449px',
            borderRadius: '20px',
            objectFit: 'cover',
            minWidth: '300px',
            objectPosition: 'center',
          }}
        />

        <Box
          sx={{
            width: '45%',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold', mb: 2, width: '70%', fontSize: '30px' }}
          >
            Trải nghiệm sự sang trọng tuyệt vời tại Huế Hotel
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#666',
              lineHeight: 1.8,
              mb: 3,
              width: '70%',
              textAlign: 'justify',
              fontSize: '20px',
            }}
          >
            Huế Hotel tọa lạc tại trung tâm thành phố, mang đến cho bạn một
            không gian nghỉ ngơi thoải mái và giá trị tuyệt vời. Tại đây, bạn sẽ
            được thư giãn trong không gian thiên nhiên trong lành, tham gia các
            hoạt động giải trí nhẹ nhàng và tận hưởng sự yên bình. Với các tiện
            nghi cơ bản, phòng nghỉ tiện nghi và dịch vụ thân thiện, Khách sạn
            Huế chắc chắn sẽ mang lại cho bạn một kỳ nghỉ dễ chịu và đáng nhớ,
            với mức giá hợp lý.
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '50%',
            height: '135%',
            backgroundColor: '#d3d2d266',
            top: '-200px',
            borderRadius: '25px',
            zIndex: -1,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          color: 'black',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: '30px', fontFamily: 'THCartoon9', width: '15%' }}
        >
          2 Start
        </Typography>
        <Typography
          sx={{ fontSize: '30px', fontFamily: 'THCartoon9', width: '15%' }}
        >
          18 Rooms
        </Typography>
        <Typography
          sx={{ fontSize: '25px', width: '50%', fontStyle: 'italic' }}
        >
          Khách sạn của chúng tôi tọa lạc giữa lòng cố đô Huế, nơi hội tụ nét
          đẹp lịch sử và sự sang trọng hiện đại. Một trải nghiệm nghỉ dưỡng đẳng
          cấp năm sao giữa thiên nhiên thơ mộng.
        </Typography>
      </Box>
      <Box sx={{ width: '100%', position: 'relative' ,m:'70px 0 150px'}}>
        <Box
          component='img'
          src={AboutUsImg}
          alt={AboutUsImg}
          sx={{
            width: '100%',
            height: '449px',
            borderRadius: '20px',
            objectFit: 'cover',
            minWidth: '300px',
            objectPosition: 'bottom',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h3'
            sx={{ textAlign: 'center', fontFamily: 'VLAMPLESOFT-MEDIUM' }}
          >
            Chọn phòng phù hợp với bạn từ
          </Typography>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              fontFamily: 'VLAMPLESOFT-MEDIUM',
              fontWeight: 'bold',
              mt: '20px',
            }}
          >
            những phòng tuyệt vời của chúng tôi
          </Typography>
          <Button
            component={Link}
            to='/booking'
            sx={{
              textAlign: 'center',
              color: 'black',
              backgroundColor: 'white',
              fontSize: '22px',
              p: '20px 20px',
              width: '300px',
              mt: '20px',
              fontWeight: 'bold',
            }}
          >
            ĐẶT NGAY
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default AboutUs;
