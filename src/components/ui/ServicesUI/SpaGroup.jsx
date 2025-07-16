import React from 'react';
import { Box, Typography } from '@mui/material';
import MassageImg from '../../../assets/img/Spa-Massage.jpg';
import XongHoiImg from '../../../assets/img/spa-xonghoi.jpg';
import ChamSocDaMatImg from '../../../assets/img/spa-chamsocdamat.jpg';
import GiamBeoImg from '../../../assets/img/spa-giambeo.jpg';
import TamTrangImg from '../../../assets/img/spa-tamtrang.jpg';

const spaServices = [
  {
    title: 'Massage thư giãn',
    image: MassageImg,
    caption: 'Massage thư giãn được nhiều du khách yêu thích (Ảnh nguồn Internet)',
    description1:
      'Massage thư giãn là dịch vụ không thể thiếu trong bất kỳ spa nào. Khách du lịch đi nghỉ dưỡng thường muốn sử dụng liệu pháp xoa bóp để giảm đau nhức cơ – như một liều thuốc giảm đau tự nhiên, đồng thời cũng giúp giảm stress – căng thẳng và giúp tăng cường hệ thống miễn dịch.',
    description2:
      'Gói dịch vụ Massage thư giãn trong khách sạn thường bao gồm: massage toàn thân bằng tinh dầu, massage bấm huyệt, massage đá nóng, massage chân… bên cạnh đó, cũng có một số spa áp dụng những liệu pháp độc đáo như: massage chân bằng cá, massage cho bà bầu… Trong số khách quốc tế đến Việt Nam, khách du lịch đến từ Hàn Quốc thường rất thích sử dụng dịch vụ massage thư giãn.',
  },
  {
    title: 'Xông hơi',
    image: XongHoiImg,
    caption:
      'Liệu pháp xông hơi vừa hỗ trợ điều trị bệnh, vừa có tác dụng làm đẹp (Ảnh nguồn Internet)',
    description1:
      'Dịch vụ xông hơi trong spa có thể được gộp chung với gói massage thư giãn hoặc tách riêng. Liệu pháp spa này không chỉ giúp khách sử dụng dịch vụ giải tỏa căng thẳng mà còn được xem là một liệu pháp điều trị bệnh – thải chất độc ra ngoài thông qua đường tiết mồ hôi. Hơi nóng trong phòng xông hơi giúp làm dãn mạch máu dưới da, tăng cường lưu thông khí huyết. Liệu pháp spa này còn có ý nghĩa trong việc làm đẹp bởi nếu khách hàng sử dụng dịch vụ xông hơi có tinh dầu sẽ đem lại làn da sáng khỏe.',
    description2: '',
  },
  {
    title: 'Chăm sóc da mặt',
    image: ChamSocDaMatImg,
    caption: '',
    description1:
      'Chăm sóc da mặt cũng là một dịch vụ cơ bản trong spa. Gói dịch vụ này có thể bao gồm: chăm sóc da bằng vitamin C cơ bản, chăm sóc da bằng vitamin C chuyên sâu, chăm sóc da mặt bằng than hoạt tính, điều trị mụn bằng công nghệ IPL, trẻ hóa da bằng công nghệ Lazer Fractional CO2, điều trị nám – tàn nhang – sắc tố da bằng công nghệ PRP + tế bào gốc… Trong các spa cao cấp, với sự hỗ trợ của hệ thống máy móc – thiết bị tiên tiến cộng với tay nghề của các chuyên gia, bác sĩ da diễu nên khách hàng trải nghiệm dịch vụ sẽ có được làn da trắng sáng, tươi trẻ.',
    description2: '',
  },
  {
    title: 'Triệt lông',
    image: '',
    caption: '',
    description1:
      'Triệt lông cũng là dịch vụ hút khách hàng đầu tại các spa, giúp chị em sở hữu vẻ ngoài tự tin khi diện các bộ đầm đi ăn tiệc hay mặc đồ thoải mái hơn khi đi chơi. Triệt ria mép, triệt lông mặt, triệt lông nách, triệt lông tay – chân… là những dịch vụ nhỏ nằm trong gói dịch vụ triệt lông của các spa. Với sự hỗ trợ của những công nghệ mới trong lĩnh vực này như: laser, IPL…, nhiều spa còn cam kết triệt lông vĩnh viễn – bảo hành trọn đời cho khách hàng.',
    description2: '',
  },
  {
    title: 'Giảm béo',
    image: GiamBeoImg,
    caption:
      'Khách hàng sử dụng dịch vụ giảm béo có thể trải nghiệm liệu trình 1 buổi hay 10 buổi (Ảnh nguồn Internet)',
    description1:
      'Các spa về điều trị trong khách sạn – resort không thể thiếu dịch vụ giảm béo. Những khách hàng là phụ nữ thường rất quan tâm đến vấn đề vóc dáng, ngoại hình nên sẽ có nhu cầu sử dụng các dịch vụ: giảm béo bụng, giảm béo đùi, giảm béo tay theo liệu trình 1 buổi hay 10 buổi. Các spa cao cấp hiện nay đa phần đều sử dụng các công nghệ hiện đại như: Cavitation, RF… trong điều trị giảm mỡ, giúp đem lại hiệu quả cao trong thời gian ngắn mà không ảnh hưởng đến sức khỏe của khách hàng sử dụng dịch vụ.',
    description2: '',
  },
  {
    title: 'Tắm trắng – tắm dưỡng',
    image: TamTrangImg,
    caption: '',
    description1:
      'Tắm trắng cũng là một dịch vụ cơ bản trong spa, phục vụ nhu cầu sở hữu làn da trắng sáng – mịn màn của phụ nữ Á đông. Các spa hiện đang áp dụng rất nhiều phương pháp tắm trắng khác nhau: bằng thảo dược, tinh chất cám gạo ngọc trai – lúa mạch cao cấp, tinh chất vitamin tổng hợp, công nghệ Nano White… Còn với liệu trình tắm dưỡng, khách hàng có thể sử dụng dịch vụ: tẩy da chết toàn thân bằng tinh chất cám gạo, ngũ cốc; tẩy da chết bằng muối biển nhật Bản; tẩy da chết, ủ dưỡng, trắng da; tắm dưỡng bằng tinh chất vừng đen, yến mạch, sữa non…',
    description2: '',
  },
];

function SpaGroup() {
  return (
    <Box
      sx={{
        mt: 6,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        p: 4,
        boxShadow: 3,
      }}
    >
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
          fontFamily: 'THCartoon9',
        }}
      >
        Spa
      </Typography>
      {spaServices.map((service, idx) => (
        <Box key={idx} sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2 }}>
            ► {service.title}
          </Typography>

          <Typography variant='body1' sx={{ mb: 2, textAlign: 'justify' }}>
            {service.description1}
          </Typography>

          {service.image && (
            <Box sx={{ textAlign: 'center', my: 3 }}>
              <Box
                component='img'
                src={service.image}
                alt={service.title}
                sx={{
                  width: '100%',
                  maxWidth: '700px',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3,
                  mb: 1,
                }}
              />
              {service.caption && (
                <Typography
                  variant='caption'
                  display='block'
                  sx={{ fontStyle: 'italic' }}
                >
                  {service.caption}
                </Typography>
              )}
            </Box>
          )}
          {service.description2 && (
            <Typography variant='body1' sx={{ textAlign: 'justify' }}>
              {service.description2}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default SpaGroup; 