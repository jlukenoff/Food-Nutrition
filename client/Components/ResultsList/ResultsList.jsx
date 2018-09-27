import React from 'react';
import styles from './ResultsList.css';

const ResultsList = ({ results }) => (
  <div className={styles.container}>
    <ul>
      {results.map(food => (
        <li key={food.nbno}>{food.name}</li>
      ))}
    </ul>
  </div>
);

export default ResultsList;
