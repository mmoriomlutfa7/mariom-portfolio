import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';

const SkillPill = ({ name }) => (
  <span className={styles.pill}>{name}</span>
);

const SkillBar = ({ name, value, mounted }) => (
  <div className={styles.skillItem}>
    <span className={styles.skillName}>{name}</span>
    <div className={styles.barWrapper}>
      <div className={styles.bar} aria-hidden>
        <div
          className={styles.fill}
          style={{ width: mounted ? `${value}%` : '0%' }}
        />
      </div>
      <span className={styles.percent}>{value}%</span>
    </div>
  </div>
);

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  const coreLanguages = [
    { name: 'Python', value: 50 },
    { name: 'C', value: 70 },
    { name: 'C++', value: 60 },
    { name: 'Java', value: 30 },
  ];

  const frontend = [
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 80 },
    { name: 'JavaScript', value: 70 },
    { name: 'React', value: 30 },
  ];

  const softSkills = [
    'Communication',
    'Leadership',
    'Problem-Solving',
    'Teamwork',
    'Handling Business',
    'Idea Development'
  ];

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.grid}>
          {/* Card 1: Core Languages */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Core Languages</h3>
            <div className={styles.cardContent}>
              {coreLanguages.map(skill => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} mounted={mounted} />
              ))}
            </div>
          </div>

          {/* Card 2: Frontend */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Frontend</h3>
            <div className={styles.cardContent}>
              {frontend.map(skill => (
                <SkillBar key={skill.name} name={skill.name} value={skill.value} mounted={mounted} />
              ))}
            </div>
          </div>

          {/* Card 3: Soft Skills */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Soft Skills</h3>
            <div className={styles.cardContentPills}>
              {softSkills.map(skill => (
                <SkillPill key={skill} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
