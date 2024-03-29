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
import { MdPersonAddAlt1, MdList, MdShoppingCart, MdMessage, MdDeleteOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { MdAddCircleOutline } from "react-icons/md";

const drawerWidth = 250;

const SideNav = (props) => {
  const { window } = props;
  const admin = useSelector((state) => state?.admin?.admin);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useRouter();

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
          <Link href="/dashboard/addService">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/addService" ? styles.active : ""}>
                <MdAddCircleOutline />
                <ListItemText>
                  <span className={pathname === "/dashboard/addService" ? styles.active : ""}>Add Service</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/allServiceList">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/allServiceList" ? styles.active : ""}>
                <MdList />
                <ListItemText>
                  <span className={pathname === "/dashboard/allServiceList" ? styles.active : ""}>Service List</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/adminMaking">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/adminMaking" ? styles.active : ""}>
                <MdPersonAddAlt1 />
                <ListItemText>
                  <span className={pathname === "/dashboard/adminMaking" ? styles.active : ""}>Make Admin</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/deleteService">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/deleteService" ? styles.active : ""}>
                <MdDeleteOutline />
                <ListItemText>
                  <span className={pathname === "/dashboard/deleteService" ? styles.active : ""}>Delete Service</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List> :
        <List>
          <Link href="/dashboard/addOrder">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/addOrder" ? styles.active : ""}>
                <MdShoppingCart />
                <ListItemText>
                  <span className={pathname === "/dashboard/addOrder" ? styles.active : ""}>Order</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/myOrders">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/myOrders" ? styles.active : ""}>
                <CgProfile />
                <ListItemText>
                  <span className={pathname === "/dashboard/myOrders" ? styles.active : ""}>Service List</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/dashboard/addReview">
            <ListItem disablePadding className={styles.link}>
              <ListItemButton className={pathname === "/dashboard/addReview" ? styles.active : ""}>
                <MdMessage />
                <ListItemText>
                  <span className={pathname === "/dashboard/addReview" ? styles.active : ""}>Add Review</span>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      }
    </div>
  );

  // looks all ok

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
            {admin ? "Admin Dashboard" : "User Dashboard"}
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