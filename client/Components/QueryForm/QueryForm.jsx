import React from 'react';
import PropTypes from 'prop-types';

import styles from './QueryForm.css';

const QueryForm = ({
  handleInput,
  handleSubmit,
}) => (
  <div>
    <p>Enter your desired nutritional information...</p>
    <div className={styles.inputContainer}>
      <div className={styles.inputFieldContainer}>
        <p>Protein</p>
        <input type="text" placeholder="min" className={styles.inputField} onKeyUp={e => handleInput('proteinMin', +e.target.value)} />
        <span> gm - </span>
        <input type="text" placeholder="max" className={styles.inputField} onKeyUp={e => handleInput('proteinMax', +e.target.value)} />
        {' gm'}
      </div>
      <div className={styles.inputFieldContainer}>
        <p>Fat</p>
        <input type="text" placeholder="min" className={styles.inputField} onKeyUp={e => handleInput('fatMin', +e.target.value)} />
        <span> gm - </span>
        <input type="text" placeholder="max" className={styles.inputField} onKeyUp={e => handleInput('fatMax', +e.target.value)} />
        {' gm'}
      </div>
      <div className={styles.inputFieldContainer}>
        <p>Carbohydrate, by difference</p>
        <input type="text" placeholder="min" className={styles.inputField} onKeyUp={e => handleInput('carbMin', +e.target.value)} />
        <span> gm - </span>
        <input type="text" placeholder="max" className={styles.inputField} onKeyUp={e => handleInput('carbMax', +e.target.value)} />
        {' gm'}
      </div>
      <div className={styles.inputFieldContainer}>
        <p>Sugar</p>
        <input type="text" placeholder="min" className={styles.inputField} onKeyUp={e => handleInput('sugarMin', +e.target.value)} />
        <span> gm - </span>
        <input type="text" placeholder="max" className={styles.inputField} onKeyUp={e => handleInput('sugarMax', +e.target.value)} />
        {' gm'}
      </div>
    </div>
    <button type="button" className={styles.submitBtn} onClick={handleSubmit}>Find Foods</button>
  </div>
);

QueryForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryForm;
