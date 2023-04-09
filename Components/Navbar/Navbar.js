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

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, signOutLoading, signOutError] = useSignOut(auth);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // console.log(user);

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
                <MenuItem onClick={handleCloseNavMenu}>
                  {user ? <button onClick={async () => await signOut()} className={styles.button}>Log Out</button> :
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
              {user &&
                <p className={styles.name}>
                  {user?.displayName}
                </p>
              }
              {user ? <button onClick={async () => await signOut()} className={styles.button}>Log Out</button> :
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