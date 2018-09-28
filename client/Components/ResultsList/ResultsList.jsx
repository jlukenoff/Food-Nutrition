import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import styles from './ResultsList.css';

const ResultsList = ({ results, handlePageChange, currentPageStartIndex }) => (
  <div className={styles.container}>
    {results.length > 0 && (
    <span className={styles.resultsTitle}>
      <u>
        {'Great news! We\'ve found foods just for you.'}
      </u>
    </span>
    )}

    <ul className={styles.resultsList}>
      {results.slice(currentPageStartIndex, currentPageStartIndex + 10).map(food => (
        <li key={food.nbno} className={styles.resultsListEntry}>{food.name}</li>
      ))}
    </ul>

    {results.length > 10 && (
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      breakClassName={styles.pageBreak}
      pageCount={Math.ceil(results.length / 10)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={styles.pagination}
      subContainerClassName={styles.pages}
      activeClassName={`${styles.activePage} ${styles.pages}`}
    />)}
  </div>
);

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPageStartIndex: PropTypes.number.isRequired,
};

export default ResultsList;
