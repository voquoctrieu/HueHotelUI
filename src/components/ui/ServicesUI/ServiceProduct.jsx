import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function ServiceProduct({
  image,
  title,
  description,
  reverse = false,
  learnMoreLink = '#',
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 0',
        gap: 4,
        flexWrap: 'wrap',
        backgroundColor: '#fff',
      }}
    >
      {/* Image */}
      <Box
        component='img'
        src={image}
        alt={title}
        sx={{
          width: '45%',
          height: 'auto',
          borderRadius: '20px',
          objectFit: 'contain',
          minWidth: '300px',
          objectPosition: 'center',
        }}
      />

      {/* Content */}
      <Box sx={{ width: '45%', minWidth: '300px' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: '#666', lineHeight: 1.8, mb: 3 }}
        >
          {description}
        </Typography>
        <Button
          variant='text'
          sx={{
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '14px',
            paddingLeft: 0,
            '&:hover': { textDecoration: 'underline' },
          }}
          href={learnMoreLink}
          endIcon={<span>&#8250;</span>}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
}

export default ServiceProduct;
