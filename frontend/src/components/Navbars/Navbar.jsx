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
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Button from "@mui/material/Button";
import HelpIcon from '@mui/icons-material/Help';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar(props) {
    const {drawerWidth, content} = props
    const location = useLocation()
    const path = location.pathname

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
            Employee Schedule
          </Typography>
        </Toolbar>
        <Toolbar>

          <Button sx={{backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', marginLeft: 2}}
                  color="inherit" component={Link} to="/signin" startIcon={<LoginIcon/>}>
            Sign In
          </Button>
          <Button sx={{backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', marginLeft: 2}}
                  color="inherit" component={Link} to="/signup" startIcon={<AddCircleIcon/>}>
            Sign Up
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
                <ListItemButton component={Link} to="" selected={"" === path}>
                  <ListItemIcon>
                        <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                  <ListItemIcon>
                        <InfoIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/how-to-use" selected={"/how-to-use" === path}>
                  <ListItemIcon>
                        <HelpIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"How to use"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/faq" selected={"/faq" === path}>
                  <ListItemIcon>
                        <QuestionAnswerIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"FAQ"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/contact" selected={"/contact" === path}>
                  <ListItemIcon>
                        <PersonPinIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Contact"} />
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
