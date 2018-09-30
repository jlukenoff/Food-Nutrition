import React, { Component } from 'react';
import QueryForm from './QueryForm/QueryForm';
import ResultsList from './ResultsList/ResultsList';
import 'normalize.css';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proteinMin: 0,
      proteinMax: 0,
      sugarMin: 0,
      sugarMax: 0,
      carbMin: 0,
      carbMax: 0,
      fatMin: 0,
      fatMax: 0,
      results: [],
      currentPageStartIndex: 0,
      ...props,
    };
    this.updateSpecData = this.updateSpecData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  updateSpecData(which, val) {
    const newState = {};
    newState[which] = val;
    this.setState({ ...newState });
  }

  handlePageChange({ selected }) {
    this.setState({ currentPageStartIndex: selected * 10 });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      proteinMin,
      proteinMax,
      sugarMin,
      sugarMax,
      carbMin,
      carbMax,
      fatMin,
      fatMax,
    } = this.state;
    fetch(`/food?203=${proteinMin}-${proteinMax}&204=${sugarMin}-${sugarMax}&205=${carbMin}-${carbMax}&269=${fatMin}-${fatMax}`)
      .then(chunk => chunk.json())
      .then(results => this.setState({ results }))
      .catch(err => console.error(`Error fetching data: ${err}`));
  }

  render() {
    return (
      <div className={styles.container}>
        <span className={styles.credit}><em>Built for Thryve [CD success]</em></span>
        <span className={styles.title}>Welcome to Food Finder</span>
        <QueryForm {...this.state} handleSubmit={this.handleSubmit} handleInput={this.updateSpecData} />
        <ResultsList {...this.state} handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default App;
