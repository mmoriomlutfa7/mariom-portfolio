import React, { useState } from 'react';
import styles from './Contact.module.css';

const ArrowSVG = () => (
  <svg className={styles.arrow} viewBox="0 0 120 80" width="120" height="80">
    <path
      d="M 10 40 Q 40 20, 70 30 L 90 30 M 80 20 L 90 30 L 80 40"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = () => (
  <svg className={styles.spark} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l1.5 4.5H18l-3.75 2.75L16.5 14l-4.5-3.27L7.5 14l1.5-4.5L4.5 6.5h4.5L12 2z" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const [selected, setSelected] = useState(null);

  const projectTypes = [
    'Mobile App',
    'Website Design',
    'Branding',
    'Consulting',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleProjectType = (type) => {
    setSelected(type);
    setForm({ ...form, projectType: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setForm({ name: '', email: '', company: '', projectType: '', message: '' });
    setSelected(null);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.title}>Get in touch.</h2>
          </div>
          <p className={styles.subtext}>Have a nice project? Reach out and let's chat.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name and Email: 2-column */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={styles.input}
                required
              />
            </div>
          </div>

          {/* Company Name: Full-width */}
          <div className={styles.field}>
            <label className={styles.label}>Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name (optional)"
              className={styles.input}
            />
          </div>

          {/* Project Type Selection */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>What's in your mind?</label>
            <div className={styles.pills}>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`${styles.pill} ${selected === type ? styles.pillActive : ''}`}
                  onClick={() => handleProjectType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label className={styles.label}>Additional Details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me more about your project..."
              className={styles.textarea}
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton}>
              <span>Send Me</span>
              <SparkIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
