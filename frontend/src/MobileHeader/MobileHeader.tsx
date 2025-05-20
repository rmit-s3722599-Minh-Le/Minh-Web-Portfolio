import React, { useState } from 'react';
import { isUserOnline, logout } from '../UserStorage/User';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { grey } from '@mui/material/colors';
import './MobileHeader.css'
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { ROUTE } from '../Constant';

function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false)
  let navigate = useNavigate();


  function sideMenu() {
    return(
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)}>
      <List>
        {['Homepage', 'My Experience  '].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => index % 2 === 0 ?  navigate(ROUTE.HOME) : navigate(ROUTE.EXPERIENCE)}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <AssessmentIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['User', isUserOnline() ? 'Logout' : 'Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => { index % 2 === 0 ? logout() : navigate(ROUTE.LOGIN) }}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> :(isUserOnline() ? <LogoutIcon /> : <LoginIcon />)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>)
  }

  return (
    <>
    <IconButton  sx={{ color: grey[50] }} size='large' onClick={() => {setOpenMenu(!openMenu)}}>
      <MenuIcon sx={{ color: grey[50] }} fontSize='inherit'/>
    </IconButton>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        {sideMenu()}
    </Drawer>
    </>



  );
}

export default MobileHeader;
