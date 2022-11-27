// import React from 'react';
// import styles from "./Navbar.module.css"
import logo from "../../images/logos/logo.png"
// import Image from 'next/image'
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         {/* <!-- LOGO --> */}
//         <div className={styles.logo}>
//           <Link href="/">
//             <Image
//               src={logo}
//               alt="Picture of logo"
//               width={150}
//               height={47}
//             />
//           </Link>
//         </div>
//         {/* <!-- NAVIGATION MENU --> */}
//         <ul className={styles.navLinks}>
//           {/* <!-- USING CHECKBOX HACK --> */}
//           <input type="checkbox" className={styles.checkbox} id="checkbox_toggle" />
//           <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
//           {/* <!-- NAVIGATION MENUS --> */}
//           <div className={styles.menu}>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/">About</Link></li>
//             <li><Link href="/">Pricing</Link></li>
//             {/* <li><Link href="/login">Login</Link></li> */}
//             <button className={styles.button}>Login</button>
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styles from "./Navbar.module.css"
import Link from 'next/link';
import Image from 'next/image'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
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

  return (
    <AppBar className={styles.container} position="fixed">
      <Container maxWidth="xl">
        <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} disableGutters>
          {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
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
                  <Link href="/"><Typography className={styles.link} >Home</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography className={styles.link} >Contact</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography className={styles.link} >About</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/login"><Typography className={styles.button} textAlign="center">Login</Typography></Link>
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
              <Link href="/login">
                <p
                  className={styles.button}
                  onClick={handleCloseNavMenu}
                >
                  Login
                </p>
              </Link>
            </Box>
          </div>
          {/* </div> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;