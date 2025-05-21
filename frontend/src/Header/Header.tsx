import React from 'react';
import './Header.css';
import { isUserOnline, logout } from '../UserStorage/UserStorage';
import {
    Button,
  } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MobileHeader from '../MobileHeader/MobileHeader';
import { ROUTE } from '../Constant';

function Header() {
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.up('md'))
  function desktopHeader() {
    return (
        <ul>
            <li>
                <a
                href={ROUTE.HOME}
                >
                Homepage
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href={ROUTE.EXPERIENCE}
                // target="_blank"
                rel="noopener noreferrer"
                >
                My experience
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href={isUserOnline() ? ROUTE.USER : ROUTE.LOGIN}
                rel="noopener noreferrer"
                >
                { isUserOnline() ?"User" : "Login"}
                </a>
            </li>
            {
                isUserOnline() &&
                <Button
                    variant="contained"
                    startIcon={<LogoutIcon />}
                    
                    onClick={() => {
                        //logout
                        logout()
                      }}
                    color="error"
                >
                    Logout
              </Button>
            }
        </ul>
    )
  }
  return (
    <div className="header">
        {isMobile ? desktopHeader() : <MobileHeader />}
    </div>
  );
}

export default Header;
