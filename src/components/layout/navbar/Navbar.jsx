import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import { useState } from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const pages = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Về chúng tôi', path: '/aboutUs' },
  { label: 'Phòng', path: '/rooms' },
  { label: 'Dịch vụ', path: '/services' },
];
const settings = ['Thông tin cá nhân', 'Tài khoản', 'Thông báo', 'Đăng xuất'];
function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [scrolled, setScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 150 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box>
      <AppBar position='static'>
        <Container
          maxWidth='100%'
          sx={{
            transition: 'all 3s ease-in',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <RealEstateAgentIcon
              sx={{
                fontSize: '30px',
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                ml: 7,
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

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page, key) => (
                  <MenuItem
                    key={key}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <RealEstateAgentIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HUE
            </Typography>
            <Box
              sx={{
                flexGrow: 2,
                width: '100%',
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {pages.map((page, key) => (
                <Button
                  key={key}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {page.label}
                </Button>
              ))}
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip >
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt='Remy Sharp' />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id='menu-appbar'
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar
        position={scrolled ? 'fixed' : ''}
        sx={{
          display: scrolled ? 'block' : 'none',
          transition: 'all 3s ease-in',
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Container
          maxWidth='100%'
          sx={
            {
            }
          }
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <RealEstateAgentIcon
              sx={{
                fontSize: '30px',
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                ml: 7,
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

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page, key) => (
                  <MenuItem
                    key={key}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <RealEstateAgentIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 2,
                width: '100%',
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {pages.map((page, key) => (
                <Button
                  key={key}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  {page.label}
                </Button>
              ))}
              <Button
                component={Link}
                to='/booking'
                sx={{
                  border: '3px solid white',
                  p: '5px 20px',
                  display: 'flex',
                  width: { xs: '100%', md: 'auto' },
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  Đặt Ngay
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
