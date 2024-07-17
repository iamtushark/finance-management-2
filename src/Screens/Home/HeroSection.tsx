// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => (
  <section style={styles.container}>
    <h1 style={styles.title}>
      Effortlessly Track and Manage <span style={styles.highlight}>Expenses</span>.
    </h1>
    <p style={styles.subtitle}>
      Our easy-to-use platform allows you to track and categorize your spending, giving you a clear picture of your financials.
    </p>
    <div style={styles.buttons}>
      <button style={styles.tryButton}>Try it for Free</button>
      <button style={styles.starButton}>Star on GitHub</button>
    </div>
  </section>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  highlight: {
    color: 'orange',
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: '1rem 0',
  },
  buttons: {
    marginTop: '1.5rem',
  },
  tryButton: {
    marginRight: '1rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  starButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
  },
};

export default HeroSection;
