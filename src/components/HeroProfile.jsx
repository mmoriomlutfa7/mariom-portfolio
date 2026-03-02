import React from 'react';
import styles from './HeroProfile.module.css';

const HeroProfile = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Side - Photo Box */}
        <div className={styles.leftSide}>
          <div className={styles.photoBox}>
            <img 
              src="src/assets/mariom/121.png" 
              alt="Momina Mariom Lutfa - Frontend Developer"
              className={styles.photo}
            />
          </div>
        </div>

        {/* Right Side - Info */}
        <div className={styles.rightSide}>
          <div className={styles.content}>
            <h1 className={styles.name}>Momina Mariom Lutfa</h1>
            <p className={styles.title}>Frontend Developer</p>
            <p className={styles.subtitle}>CSE Student | Java Developer | Problem Solver</p>
            
            <div className={styles.aboutSection}>
              <h2 className={styles.aboutTitle}>About Me</h2>
              <p className={styles.aboutText}>
                Crafting seamless digital experiences through clean code and intuitive user interfaces. 
                Passionate about building elegant and responsive platforms that solve real-world problems 
                and make everyday life easier.
              </p>
            </div>

            <button className={styles.contactBtn}>
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProfile;
