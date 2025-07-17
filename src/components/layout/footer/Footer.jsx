import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '40px 40px 0 0',
        padding: '80px 0px',
        width: '101%',
      }}
    >
      <Grid container spacing={20} justifyContent='center'>
        <Grid sx={{ textAlign: 'center' }}>
          <Box
            display='flex'
            justifyContent='center'
            gap={2}
            sx={{ mt: '20px' }}
          >
            <IconButton sx={{ color: 'white' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <PinterestIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* CONTACT US */}
        <Grid>
          <Typography variant='h6' fontWeight='bold'>
            Liên Hệ
          </Typography>
          <Typography mt={1}>
            <strong>Tel:</strong> +84 702 679 156
          </Typography>
          <Typography>
            <strong>Email:</strong> 22T1020774@husc.edu.vn
          </Typography>
        </Grid>

        {/* HOTEL ADDRESS */}
        <Grid>
          <Typography variant='h6' fontWeight='bold'>
            Địa Chỉ
          </Typography>
          <Typography mt={1}>
            1/142 Nguyễn Sinh Cung, Vỹ Dạ, Huế,
            <br />
            Thành phố Huế
          </Typography>
        </Grid>

        {/* AWARDS + PAYMENT ICONS (placeholder only) */}
        <Grid textAlign='center'>
          <Box mb={2}>
            <Box sx={{ display: 'flex', mt: '40px' }}>
              <RealEstateAgentIcon
                sx={{
                  fontSize: '30px',
                  mr: 1,
                  ml: 0,
                }}
              />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                HUE
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
