import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import styles from "./Navbar.module.css"
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../images/logos/logo.png"
import auth from "../../firebase.init"
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import Loading from "../Loading/Loading"
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, removeUser } from '../../Redux/features/Auth/userSlice';
import { useEffect } from 'react';
import { getAdmin } from '../../Redux/features/Auth/adminSlice';

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, signOutLoading, signOutError] = useSignOut(auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getUser(user));
    }
  }, [user])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // if (loading || signOutLoading) {
  //   return (
  //     <Loading></Loading>
  //   )
  // }

  if (error || signOutError) {
    console.log(error?.message || signOutError?.message);
  }

  return (
    <AppBar className={styles.container} position="fixed">
      <Container maxWidth="xl">
        <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} disableGutters>
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

          <div>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography className={styles.link}>Home</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography className={styles.link}>Contact</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography className={styles.link}>About</Typography></Link>
                </MenuItem>
                {
                  user ?
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Link href="/dashboard/myOrders"><Typography className={styles.link}>Dashboard</Typography></Link>
                    </MenuItem> : ""
                }
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {
                    user ? <Avatar alt="Remy Sharp" src={user.photoURL} /> :
                      <Avatar style={{ backgroundColor: "black" }} alt="" src="" />
                  }
                </div>
                <MenuItem onClick={handleCloseNavMenu}>
                  {user ? <button onClick={async () => { dispatch(removeUser()); await signOut() }} className={styles.button}>Log Out</button> :
                    <Link href="/login"><Typography className={styles.button} textAlign="center">Login</Typography></Link>
                  }
                </MenuItem>
              </Menu>
            </Box>
            <Box className={styles.linkContainer} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link href="/">
                <p
                  className={styles.link}
                  onClick={handleCloseNavMenu}
                >
                  Home
                </p>
              </Link>
              <Link href="/">
                <p
                  className={styles.link}
                  onClick={handleCloseNavMenu}
                >
                  Contact
                </p>
              </Link>
              <Link href="/">
                <p
                  className={styles.link}
                  onClick={handleCloseNavMenu}
                >
                  About
                </p>
              </Link>
              {
                // user ?
                <Link href="/dashboard/addService">
                  <p
                    className={styles.link}
                    onClick={handleCloseNavMenu}
                  >
                    Dashboard
                  </p>
                </Link>
                // : ""
              }
              {
                user ? <Avatar alt="" src={user.photoURL} /> :
                  <Avatar style={{ backgroundColor: "black" }} alt="" src="" />
              }
              {user ? <button onClick={async () => { dispatch(removeUser()); await signOut() }} className={styles.button}>Log Out</button> :
                <Link href="/login">
                  <p
                    className={styles.button}
                    onClick={handleCloseNavMenu}
                  >
                    Login
                  </p>
                </Link>
              }
            </Box>
          </div>
          {/* </div> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;