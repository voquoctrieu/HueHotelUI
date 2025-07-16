import { IconButton } from '@mui/material';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const CustomLeftArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',

      left: '46%',
      top: '90%',
      transform: 'translateY(-50%,-50%)',
      zIndex: 999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }}
  >
    <ChevronLeftIcon />
  </IconButton>
);

const CustomRightArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: '46%',
      top: '90%',
      transform: 'translateY(-50%,-50%)',
      zIndex: 999,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }}
  >
    <ChevronRightIcon />
  </IconButton>
);

export { CustomLeftArrow, CustomRightArrow };
