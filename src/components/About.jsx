import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <p>
            I am a Computer Science student from Bangladesh focused on building practical, user-centered web applications. I am currently expanding my skills in full-stack development while strengthening my foundation in programming and problem-solving. I approach learning through consistent project-building and continuous improvement, with the long-term goal of developing scalable systems that can create meaningful impact.
          </p>
          <p>
            I am a MERN Stack Enthusiast exploring how technology can solve real problems and scale beyond borders. My approach combines a user-first design mindset with pragmatic development. I prioritize accessibility, performance, and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;