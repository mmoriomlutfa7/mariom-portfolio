import React from 'react';
import styles from './Projects.module.css';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Attendance Tracker',
    tags: ['OOP', 'JavaScript'],
    description: 'A modular JavaScript application leveraging Object-Oriented Programming to streamline attendance recording and analytics with persistent data storage.',
  },
  {
    title: 'AI-Based Book Genre Classification',
    tags: ['Machine Learning', 'Python'],
    description: 'A machine learning pipeline combining Scikit-learn algorithms with advanced NLP techniques to accurately classify book genres from textual metadata.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.description}>{project.description}</p>
              <a href="#" className={styles.viewLink}>
                View Project
                <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;