import React from 'react';
import styles from './Certificates.module.css';

const CertificateCard = ({ name, issuer, link }) => (
  <div className={styles.card}>
    <div className={styles.cardContent}>
      <h3 className={styles.certificateName}>{name}</h3>
      <p className={styles.issuer}>{issuer}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>
        View Certificate
      </a>
    </div>
  </div>
);

const Certificates = () => {
  const certificatesData = [
    {
      name: 'Python',
      issuer: 'Kaggle Certificate of Completion',
      link: '#'
    },
    {
      name: 'Pandas',
      issuer: 'Kaggle Certificate of Completion',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Certificates</h2>
        <div className={styles.grid}>
          {certificatesData.map((cert, index) => (
            <CertificateCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

