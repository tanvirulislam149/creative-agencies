import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        {/* <!-- LOGO --> */}
        <div className={styles.logo}>MUO</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className={styles.navLinks}>
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" className={styles.checkbox} id="checkbox_toggle" />
          <label for="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className={styles.menu}>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li className={styles.services}>
              <a href="/">Services</a>
              {/* <!-- DROPDOWN MENU --> */}
              <ul className={styles.dropdown}>
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;