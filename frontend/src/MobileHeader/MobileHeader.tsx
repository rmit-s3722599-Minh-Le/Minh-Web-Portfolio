import React from 'react';
import { isUserOnline, logout } from '../UserStorage/User';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
function MobileHeader() {
  return (
    <MenuIcon sx={{ color: grey[50] }} fontSize='large'/>
  );
}

export default MobileHeader;
