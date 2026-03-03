/*import React from 'react';
import styles from './Footer.module.css';

const UpArrow = () => (
  <span className={styles.arrow} aria-hidden>↑</span>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <button className={styles.top} onClick={scrollToTop} aria-label="Scroll to top">
          <UpArrow />
        </button>
      </div>
    </footer>
  );
};

export default Footer; 
*/
import React from 'react'

export default function Footer(){
  return (
    <footer className="Footer" style={{ textAlign: "center", width: "100%",background:"rgba(255,255,255,0.5)",}}n>
      
      <div>
        ©{new Date().getFullYear()}
         Momina Mariom Lutfa — Built with React + Vite
         </div>
    </footer>
  )
}