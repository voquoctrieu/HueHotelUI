import React from 'react'
import HeaderHome from '../../components/layout/header/HeaderHome'
import SidebarHome from '../../components/layout/sidebar/SidebarHome'
import RoomsHome from '../../components/layout/Room/RoomsHome'
import FooterHome from '../../components/layout/footer/Footer'
import { Box } from '@mui/material'
import Facilities from '../../components/layout/facilities/Facilities'
function HomeContainer() {
  return (
    <Box sx={{
      width: '1500px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto',
      borderRadius:'20px'
    }} >
      <HeaderHome />
      <SidebarHome />
      <RoomsHome />
      <Facilities/>
      <FooterHome />
    </Box>
  )
}

export default HomeContainer
