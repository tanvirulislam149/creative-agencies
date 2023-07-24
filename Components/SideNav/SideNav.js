import styles from "./SideNav.module.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../../images/logos/logo.png"
import Image from 'next/image';
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { GrAddCircle } from "react-icons/gr";
import { MdPersonAddAlt1, MdList, MdShoppingCart, MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const drawerWidth = 200;

const SideNav = (props) => {
  const { window, admin } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Picture of logo"
            width={150}
            height={47}
          />
        </Link>
      </div>
      {admin ?
        <List>
          <Link href="/dashboard/serviceList">
            <ListItem disablePadding>
              <ListItemButton>
                <MdList />
                <ListItemText>
                  Service List
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/addCourse">
            <ListItem disablePadding>
              <ListItemButton>
                <GrAddCircle />
                <ListItemText>
                  Add Service
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/makeAdmin">
            <ListItem disablePadding>
              <ListItemButton>
                <MdPersonAddAlt1 />
                <ListItemText>
                  Make Admin
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List> :
        <List>
          <Link href="/dashboard/order">
            <ListItem disablePadding>
              <ListItemButton>
                <MdShoppingCart />
                <ListItemText>
                  Order
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/orderList">
            <ListItem disablePadding>
              <ListItemButton>
                <CgProfile />
                <ListItemText>
                  Service List
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/addReview">
            <ListItem disablePadding>
              <ListItemButton>
                <MdMessage />
                <ListItemText>
                  Add Review
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <div>
      <CssBaseline />
      <AppBar
        className={styles.menuBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className={styles.sideNav}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default SideNav