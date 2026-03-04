import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <p>
            I am a Computer Science student from Bangladesh dedicated to crafting performant, user-centered web interfaces. While I have a strong foundation in full-stack principles, my passion lies in Frontend Development—transforming complex problems into intuitive, accessible digital experiences.
          </p>
          <p>
            I believe that great code isn’t just about making things work; it’s about making them work for everyone. My approach combines a user-first design mindset with pragmatic development, prioritizing clean architecture and maintainable code. Whether I’m optimizing load times or refining a UI component, my goal is always to build scalable systems that create a meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;