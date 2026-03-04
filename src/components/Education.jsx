import React from 'react';
import styles from './Education.module.css';

const EducationItem = ({ degree, institution, year, icon }) => (
  <div className={styles.timelineItem}>
    <div className={styles.dotContainer}>
      <div className={styles.dot}>{icon}</div>
    </div>
   <div className={styles.content}>
      <h3 className={styles.degree}>{degree}</h3>
      <p className={styles.institution}>{institution}</p>
      <p className={styles.year}>{year}</p>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: '[Metropolitan University sylhet,Bangladesh]',
      year: '2023 – Present',
      icon: '🎓'
    },
    {
      degree: 'HSC',
      institution: '[Science and Technology College,Sylhet,Bangladesh]',
      year: '2019 – 2021',
      icon: '📚'
    },
    {
      degree: 'SSC',
      institution: '[Bangladesh Bank High School,sylhet,Bangladesh]',
      year: '2017 – 2018',
      icon: '✏️'
    }
  ];

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              year={item.year}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
