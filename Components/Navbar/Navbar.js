import React from 'react';
import styles from "./Navbar.module.css"
import logo from "../../images/logos/logo.png"
import Image from 'next/image'
import Link from 'next/link';


const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        {/* <!-- LOGO --> */}
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
        {/* <!-- NAVIGATION MENU --> */}
        <ul className={styles.navLinks}>
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" className={styles.checkbox} id="checkbox_toggle" />
          <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className={styles.menu}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Pricing</Link></li>
            <li><Link href="/login">login</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;