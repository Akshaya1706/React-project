import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useLocation } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';

const PAGES = ["Employee Details", "Projects", "Instructions", "Payroll", "Achievements","Feedback"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const isLogin = (localStorage.getItem('user') || '').length > 0;

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const shouldDisplayIconAndFooter = isLogin && !location.pathname.includes("/employee-details");

  return (
    <React.Fragment>
      {shouldDisplayIconAndFooter && (
        <>
          <Drawer
            open={openDrawer}
            onClose={handleDrawerClose}
          >
            <List>
              {PAGES.map((page, index) => (
                <ListItemButton
                  key={index}
                  component={Link}
                  to={`/${page.replace(/\s+/g, '')}`}
                  onClick={handleDrawerClose}
                >
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary={page} />
                </ListItemButton>
              ))}
            </List>
            <Divider />
            <List>
              <ListItemButton onClick={() => console.log('Logout')}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </List>
          </Drawer>
          <div style={{ marginRight: "auto" }}>
            <IconButton sx={{ color: "rgb(11, 122, 212)" }} onClick={() => setOpenDrawer(!openDrawer)}>
              <WidgetsIcon />
            </IconButton>
          </div>
        </>
      )}
  
    </React.Fragment>
  );
};

export default  DrawerComp;
