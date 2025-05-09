import React from 'react';
import './Header.css';
import { isUserOnline, logout } from '../UserStorage/User';
import {
    Button,
  } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MobileHeader from '../MobileHeader/MobileHeader';

function Header() {
  const theme = useTheme();
  //const [isMobile, setMobile] = useState(useMediaQuery(theme.breakpoints.up('sm')));
  let isMobile = useMediaQuery(theme.breakpoints.up('md'))
  function desktopHeader() {
    return (
        <ul>
            <li>
                <a
                href="/"
                >
                Homepage
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href="/experience"
                // target="_blank"
                rel="noopener noreferrer"
                >
                My experience
                </a>
            </li>
            <li>
                <a
                className="App-link"
                href={isUserOnline() ? "/user" : "/login"}
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
