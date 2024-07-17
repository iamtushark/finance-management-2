import React from 'react';

const features = [
  {
    title: 'Easy to use',
    description: 'Track expenses on-the-go with categorization and logging.',
  },
  {
    title: 'Data-driven insights',
    description: 'Expense tracker can provide valuable insights into your spending habits, allowing you to make more informed decisions.',
  },
  {
    title: 'Identify overspending',
    description: 'Take control of your finances by identifying and reducing overspending with an expense tracker.',
  },
  {
    title: 'Real-time visibility',
    description: 'Monitor your expenses in real-time, whether you are at home or on-the-go, with a user-friendly interface.',
  },
];

const FeatureList: React.FC = () => (
  <section style={styles.container}>
    <h2 style={styles.title}>Why to use <span style={styles.highlight}>Fake.expense.app?</span></h2>
    <ul style={styles.list}>
      {features.map((feature, index) => (
        <li key={index} style={styles.listItem}>
          <h3 style={styles.featureTitle}>{feature.title}</h3>
          <p style={styles.featureDescription}>{feature.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    backgroundColor: '#f7f7f7',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  highlight: {
    color: 'orange',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    margin: '1.5rem 0',
  },
  featureTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  featureDescription: {
    fontSize: '1rem',
  },
};

export default FeatureList;
