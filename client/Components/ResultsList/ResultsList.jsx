import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './ResultsList.css';

const ResultsList = ({ results, handlePageChange, currentResultIndex }) => (
  <div className={styles.container}>
    <ul>
      {results.slice(currentResultIndex, currentResultIndex + 5).map(food => (
        <li key={food.nbno}>{food.name}</li>
      ))}
    </ul>
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={Math.ceil(results.length / 5)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  </div>
);

export default ResultsList;
