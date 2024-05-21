import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import images from "../../constants/images";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [checkMenu, setCheckMenu] = useState(false);
  return (
    <nav className={`${styles.app__navbar}`}>
      <div className={`${styles.app__navbar_logo}`}>
        <img src={images.gericht} alt="gericht-logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        <a href="#home">
          <li className={`${styles.p__opensans} p__opensans`}>Home</li>
        </a>
        <a href="about">
          <li className={`${styles.p__opensans} p__opensans`}>About</li>
        </a>
        <a href="menu">
          <li className={`${styles.p__opensans} p__opensans`}>Menu</li>
        </a>
        <a href="#awards">
          <li className={`${styles.p__opensans} p__opensans`}>Awards</li>
        </a>
        <a href="#contact">
          <li className={`${styles.p__opensans} p__opensans`}>Contact</li>
        </a>
      </ul>
      <div className={styles.app__navbar_login}>
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table v
        </a>
      </div>
      <div className={styles.app__navbar_smallscreen}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setCheckMenu(true)}
        />
        {checkMenu && (
          <div
            className={`${styles.app__navbar_smallscreen_overlay} flex__center slide-bottom`}
          >
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={27}
              onClick={() => setCheckMenu(false)}
              className={styles.overlay__close}
            />

            <ul className={styles.app__navbar_smallscreen_links}>
              <a href="#home">
                <li className={`${styles.p__opensans} p__opensans`}>Home</li>
              </a>
              <a href="about">
                <li className={`${styles.p__opensans} p__opensans`}>About</li>
              </a>
              <a href="menu">
                <li className={`${styles.p__opensans} p__opensans`}>Menu</li>
              </a>
              <a href="#awards">
                <li className={`${styles.p__opensans} p__opensans`}>Awards</li>
              </a>
              <a href="#contact">
                <li className={`${styles.p__opensans} p__opensans`}>Contact</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
