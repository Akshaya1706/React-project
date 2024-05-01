import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import './Header.css';
const PAGES = ["Profile"];

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const isLogin = (localStorage.getItem('user') || '').length > 0;

  useEffect(() => {
    setValue(0); // Reset the tab value when component mounts
  }, []);

  return (
    <div className='Header'>
      <React.Fragment>
        <AppBar sx={{ background: "#063970", height: '48px' }}>
          <Toolbar>
            <MapsHomeWorkIcon />
            {
              isMatch ? (
                <>
                  <Typography>Dashboard</Typography>
                  <DrawerComp />
                </>
              ) : (
                <>
                  <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                    {
                      PAGES.map((page, index) => (
                        <Tab key={index} label={page} />
                      ))
                    }
                  </Tabs>
                  {!isLogin &&
                    <>
                      <Button sx={{ marginLeft: "auto" }} variant="contained" component={Link} to="/login">Login</Button>
                      <Button sx={{ marginLeft: "10px" }} variant="contained" component={Link} to="/register">Register</Button>
                    </>
                  }
                  {isLogin &&
                    <>
                      <label>{localStorage.getItem('user')}</label>
                      <Button sx={{ marginLeft: "auto" }} variant="contained" component={Link} to="/logout">Logout</Button>
                    </>
                  }
                </>
              )
            }
          </Toolbar>
          <DrawerComp />
        </AppBar>
      </React.Fragment>
      {isLogin && <Footer />} 
    </div>
  )
}

export default Header;
