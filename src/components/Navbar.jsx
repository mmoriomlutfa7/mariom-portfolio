import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>M</div>
        <div className={styles.links}>
          <a className={styles.link} href="#about">About</a>
          <a className={styles.link} href="#education">Education</a>
          <a className={styles.link} href="#skills">Skills</a>
          <a className={styles.link} href="#certificates">Certificates</a>
          <a className={styles.link} href="#projects">Projects</a>
          <a className={styles.link} href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;