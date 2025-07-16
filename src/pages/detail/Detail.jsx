import React from 'react';
import BannerBooking from '../../assets/img/banner-booking.jpg';
import { Box, Typography } from '@mui/material';
import Footer from '../../components/layout/footer/Footer';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import BookRoomDetail from '../../components/layout/form/BookRoomDetail';
import FacilitiesDetail from '../../components/ui/facilities/FacilitiesDetail';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AirIcon from '@mui/icons-material/Air';
import LockIcon from '@mui/icons-material/Lock';
import WifiIcon from '@mui/icons-material/Wifi';
import GroupsIcon from '@mui/icons-material/Groups';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useParams } from 'react-router-dom';

function Detail() {
  const { roomType } = useParams();
  const style1 = {
    flex: '0 0 40%',
  };
  const style2 = {
    flex: '0 0 40%',
    border: ' 1px solid black',
    borderRadius: '10px',
    ':hover': {
      cursor: 'pointer',
    },
  };

  
  const roomDetails = {
    don: {
      name: 'PHÒNG ĐƠN',
      originalPrice: '330.000',
      price: '290.000',
      bed: '1 Giường Đơn',
      people: '1 Người',
      size: '35m²',
      view: 'Hướng ra vườn',
      desc: 'Tận hưởng sự thoải mái tối đa trong 18 phòng nghỉ tại trung tâm thành phố Huế. Được thiết kế theo phong cách Tân Cổ Điển, không gian mang hơi thở nhẹ nhàng và thanh lịch, vừa hiện đại vừa đậm chất hoài niệm của vùng đất kinh kỳ. Phòng có diện tích rộng 35m², bố trí thông minh với không gian ấm cúng, cùng 3 cặp phòng nối liền thích hợp cho gia đình hoặc nhóm bạn. Màu sắc chủ đạo là tông sáng nhẹ, kết hợp hài hòa với nội thất uốn lượn mềm mại, tạo cảm giác thư thái và sang trọng.'
    },
    doi1giuong: {
      name: 'PHÒNG ĐÔI/1 GIƯỜNG',
      originalPrice: '450.000',
      price: '400.000',
      bed: '1 Giường Đôi',
      people: '2 Người',
      size: '40m²',
      view: 'Hướng ra vườn',
      desc: 'Tận hưởng sự thoải mái tối đa trong không gian rộng rãi, phù hợp cho 2 người tại trung tâm thành phố Huế. Phòng được thiết kế theo phong cách Tân Cổ Điển, vừa hiện đại vừa đậm chất hoài niệm cố đô. Diện tích 40m² cùng 1 giường đôi lớn, nội thất ấm cúng, tiện nghi, màu sắc trang nhã, tạo cảm giác thư thái và lãng mạn. Thích hợp cho các cặp đôi, bạn bè hoặc du khách muốn tận hưởng sự yên tĩnh và tiện nghi.'
    },
    doi2giuong: {
      name: 'PHÒNG ĐÔI/2 GIƯỜNG',
      originalPrice: '480.000',
      price: '420.000',
      bed: '2 Giường Đơn',
      people: '2 Người',
      size: '45m²',
      view: 'Hướng ra vườn',
      desc: 'Tận hưởng sự thoải mái tuyệt vời trong căn phòng có thiết kế hiện đại và tiện nghi, phù hợp cho 2 người. Với diện tích rộng 45m², phòng được bố trí 2 giường đơn riêng biệt, tạo sự riêng tư và thoải mái cho các cặp bạn bè, đồng nghiệp hoặc khách du lịch. Không gian thoáng mát, nội thất sang trọng, ánh sáng tự nhiên hài hòa, mang lại cảm giác thư giãn như ở nhà. Phòng hướng ra vườn, giúp bạn dễ dàng tận hưởng không khí trong lành của thành phố Huế mộng mơ.'
    },
    ba: {
      name: 'PHÒNG 3 NGƯỜI',
      originalPrice: '550.000',
      price: '500.000',
      bed: '3 Giường Đơn',
      people: '3 Người',
      size: '50m²',
      view: 'Hướng ra vườn / thành phố',
      desc: 'Phòng 3 người được thiết kế rộng rãi với diện tích 50m², phù hợp cho nhóm bạn hoặc gia đình nhỏ. Trang bị 3 giường đơn riêng biệt, bố trí hợp lý để đảm bảo sự thoải mái và riêng tư cho từng người. Phòng sử dụng gam màu tươi sáng, nội thất hiện đại và tiện nghi, kết hợp với ánh sáng tự nhiên từ cửa sổ lớn. Không gian mang lại cảm giác thư giãn, dễ chịu, thích hợp cho cả nghỉ dưỡng và công tác tại trung tâm thành phố Huế.'
    },
    giadinh: {
      name: 'PHÒNG GIA ĐÌNH',
      originalPrice: '800.000',
      price: '700.000',
      bed: '2 Giường Đôi',
      people: '4 Người',
      size: '58m²',
      view: 'Hướng ra vườn / thành phố',
      desc: 'Phòng Gia Đình là lựa chọn lý tưởng cho nhóm bạn hoặc gia đình từ 3–4 người. Với diện tích rộng 58m², phòng được bố trí 2 giường đôi cỡ lớn, không gian sinh hoạt chung thoải mái, nội thất hiện đại và tinh tế. Ánh sáng tự nhiên tràn ngập qua khung cửa sổ lớn, kết hợp với thiết kế mở và tiện nghi cao cấp, tạo nên trải nghiệm lưu trú tiện nghi như ở nhà. Phòng hướng ra vườn hoặc thành phố, mang lại cảm giác thoáng đãng và thư giãn giữa lòng Huế cổ kính.'
    }
  };
  const detail = roomDetails[roomType] || roomDetails['don'];

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
        borderRadius: '30px',
      }}
    >
      <HeaderBooking img={BannerBooking} title={'CHI TIẾT PHÒNG'} />
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}
      >
        <Box
          sx={{
            width: '60%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderBottom: '1px solid black',
              m: '30px 0 0',
              pb: 2,
            }}
          >
            <Typography variant='h3' fontFamily='THCartoon9'>
              {detail.name}
            </Typography>
            <Box sx={{ width: '100%', borderBottom: '1px solid #ccc', my: 1 }} />
            <Typography variant='h6' sx={{ mt: 1 }}>
              Đặc điểm phòng
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexWrap: 'wrap', gap: '40px', m: '50px 0' }}
          >
            <Box sx={style1}>
              <FacilitiesDetail
                img={HotelIcon}
                title={'Giường'}
                description={detail.bed}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={GroupsIcon}
                title={'Số người'}
                description={detail.people}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={FitScreenIcon}
                title={'Kích thước'}
                description={detail.size}
              />
            </Box>
            <Box sx={style1}>
              <FacilitiesDetail
                img={LocationCityIcon}
                title={'Tầm Nhìn'}
                description={detail.view}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: '1px solid black', pb: '50px' }}>
            <Typography
              sx={{ fontSize: '18px', textAlign: 'justify', m: '0 auto' }}
            >
              {detail.desc}
            </Typography>
          </Box>
          <Box sx={{ m: '20px 0' }}>
            <Typography variant='h4' sx={{ fontFamily: 'THCartoon9' }}>
              Tiện ích sẵn có
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                m: '50px 0',
              }}
            >
              <Box sx={style2}>
                <FacilitiesDetail img={ShowerIcon} title={'Phòng tắm'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={WifiIcon} title={'Wifi'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={SmokeFreeIcon} title={'Cấm thuốc'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={LocalPhoneIcon} title={'Điện thoại'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={AirIcon} title={'Điều hòa'} />
              </Box>
              <Box sx={style2}>
                <FacilitiesDetail img={LockIcon} title={'Két sắt'} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '20px', fontFamily: 'THCartoon9' }}>
            Đặt Phòng
          </Typography>
          <BookRoomDetail />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Detail;
