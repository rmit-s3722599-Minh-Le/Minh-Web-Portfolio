import React from 'react';
import './Header.css';
import { isUserOnline, logout } from '../UserStorage/User';
import {
    Button,
  } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default Header;
