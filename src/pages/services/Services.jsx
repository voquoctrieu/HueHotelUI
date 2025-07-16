import { Box } from '@mui/material';
import React from 'react';
import HeaderBooking from '../../components/layout/header/HeaderBooking';
import BannerBooking from '../../assets/img/banner-booking.jpg';
import TheThao from '../../assets/img/TheThao.jpg';
import TeamBuilding from '../../assets/img/teambiulding.jpg';
import DuaDOn from '../../assets/img/duadon.jpg';
import NhaHang from '../../assets/img/nhahang.jpg';
import Gym from '../../assets/img/gym.jpg';
import Footer from '../../components/layout/footer/Footer';
import ServicesProduct from '../../components/ui/ServicesUI/ServiceProduct';
import SpaGroup from '../../components/ui/ServicesUI/SpaGroup';

function Services() {
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
      <HeaderBooking img={BannerBooking} title={'DỊCH VỤ'} />
      <Box>
        <ServicesProduct
          image={BannerBooking}
          title={'Bữa sáng dinh dưỡng'}
          description={
            'Khách sạn chúng tôi phục vụ bữa sáng đa dạng và đầy đủ dinh dưỡng mỗi ngày, mang đến trải nghiệm ẩm thực tuyệt vời ngay từ buổi sớm. Thực đơn bao gồm các món ăn truyền thống Việt Nam như phở, bún, cháo, cùng với các món Âu như bánh mì, trứng, xúc xích và trái cây tươi'
          }
        />{' '}
        <ServicesProduct
          image={TheThao}
          title={'Thể Thao'}
          description={
            'Khách sạn chúng tôi mang đến cho quý khách trải nghiệm đạp xe thú vị với chương trình "Đạp xe khám phá địa phương". Với những chiếc xe đạp hiện đại luôn sẵn sàng, quý khách có thể thong dong dạo quanh các con đường ven biển, khám phá vẻ đẹp yên bình của vùng quê hoặc tham quan những địa điểm du lịch nổi bật gần khách sạn.'
          }
          reverse={true}
        />
        <ServicesProduct
          image={TeamBuilding}
          title={'TeamBuilding'}
          description={
            'Khách sạn chúng tôi tự hào là điểm đến lý tưởng cho các hoạt động teambuilding, giúp đội ngũ của bạn gắn kết và phát triển kỹ năng làm việc nhóm trong một không gian thoải mái và đầy cảm hứng. Với các khu vực rộng rãi và dịch vụ chuyên nghiệp, chúng tôi cung cấp nhiều chương trình teambuilding đa dạng, từ các trò chơi ngoài trời, thử thách sáng tạo đến các hoạt động xây dựng đội nhóm nâng cao tinh thần đồng đội.'
          }
        />
        <ServicesProduct
          image={DuaDOn}
          title={'Hỗ trợ đưa đón'}
          description={
            'Chúng tôi cung cấp dịch vụ đưa đón thuận tiện và an toàn, giúp quý khách dễ dàng di chuyển giữa khách sạn và các địa điểm nổi bật trong khu vực. Dịch vụ đưa đón được tổ chức linh hoạt, bao gồm xe đưa đón sân bay, bến tàu, hoặc các chuyến tham quan theo yêu cầu. Đội ngũ tài xế chuyên nghiệp và thân thiện của chúng tôi luôn sẵn sàng phục vụ'
          }
          reverse={true}
        />
        <ServicesProduct
          image={NhaHang}
          title={'Nhà hàng'}
          description={'Nhà hàng với thực đơn phong phú từ các món ăn truyền thống Việt Nam đến những tinh hoa ẩm thực Á – Âu hiện đại. Không gian sang trọng, phục vụ tận tâm và nguyên liệu tươi ngon mỗi ngày sẽ mang đến cho quý khách trải nghiệm ẩm thực khó quên. Từ bữa sáng buffet, bữa trưa nhẹ đến bữa tối ấm cúng bên người thân, chúng tôi luôn sẵn sàng phục vụ.'}
        />
        <ServicesProduct
          image={Gym}
          title={'Phòng GYM – FITNESS CENTER'}
          description={'Phòng Gym với các dụng cụ luyện tập hiện đại sẽ giúp Quý khách có những giờ phút thư giãn, rèn luyện thể hình trong một không gian thoáng đãng với bầu không khí trong lành của biển. Những huấn luyện viên của chúng tôi sẽ hỗ trợ quý khách có những bài tập an toàn và hiệu quả để khởi động một ngày mới tràn đầy năng lượng.'}
          reverse={true}
        />
        <SpaGroup />
      </Box>
      <Footer />
    </Box>
  );
}

export default Services;
