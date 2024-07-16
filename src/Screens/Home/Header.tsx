    // src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => (
  <header style={styles.header}>
    <div style={styles.logo}>Expense.fyi</div>
    <button style={styles.signInButton}>Sign in</button>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  signInButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
