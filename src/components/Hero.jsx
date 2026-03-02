import React from 'react';
import styles from './Hero.module.css';
import { Github, Linkedin, Facebook, Youtube } from 'lucide-react';
// add image for hero section
import heroImage from '../../images/121.png';

const Hero = () => {
  return (
    <section className={styles.section} id="home">
      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.name}>Momina Mariom Lutfa</h1>
          
          <h2 className={styles.title}> Undergraduate Student|   Computer Science|Frontend Developer </h2>
          
          <div className={styles.summary}>
            <p>Crafting seamless digital experiences through clean code and intuitive user interfaces.</p>
          </div>

          <div className={styles.buttonGroup}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
          </div>
          <div className={styles.socialRow}>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.socialBtn} title="GitHub">
              <Github size={25} />
            </a>
            <a href="https://www.linkedin.com/in/m-mariom-lutfa-70585a3b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles.socialBtn} title="LinkedIn">
              <Linkedin size={25} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialBtn} title="Facebook">
              <Facebook size={25} />
            </a>
            <a href="https://www.youtube.com/@M_mariom_Tuber" target="_blank" rel="noreferrer" aria-label="YouTube" className={styles.socialBtn} title="YouTube">
              <Youtube size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* image side – replace placeholder with your own <img> or background */}
      <div className={styles.imageFrame}>
  <img
    src="/images/121.png"
    alt="Hero graphic"
    className={styles.headshot}
  />
</div>
    </section>
  );
};

export default Hero;