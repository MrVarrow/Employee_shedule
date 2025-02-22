import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {Link, useLocation} from "react-router-dom";
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import FastForwardIcon from '@mui/icons-material/FastForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Navbar(props) {
    const {drawerWidth, content, setIsAuthenticated} = props
    const location = useLocation()
    const path = location.pathname
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('username');
        setIsAuthenticated(false);
        sessionStorage.clear();
        window.location.href = '/';
    };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employee Schedule {username ? `- ${username}` : ""}
          </Typography>
        </Toolbar>
        <Toolbar>

          <Button sx={{backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', marginLeft: 2}}
                  color="inherit" onClick={handleLogout} startIcon={<LoginIcon/>}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box'},
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/employee-manager" selected={"/employee-manager" === path}>
                  <ListItemIcon>
                        <AccountCircleIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Employee manager"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/workplace-manager" selected={"/workplace-manager" === path}>
                  <ListItemIcon>
                        <ApartmentIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Workplace manager"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/schedule-manager" selected={"/schedule-manager" === path}>
                  <ListItemIcon>
                        <EventNoteIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Schedule manager"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/active-schedule-manager" selected={"/active-schedule-manager" === path}>
                  <ListItemIcon>
                        <FastForwardIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Active schedule manager"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/support" selected={"/support" === path}>
                  <ListItemIcon>
                        <SupportIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Support"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/settings" selected={"/settings" === path}>
                  <ListItemIcon>
                        <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItemButton>
              </ListItem>


          </List>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0}}>
        <Toolbar />

          {content}

      </Box>
    </Box>
  );
}
