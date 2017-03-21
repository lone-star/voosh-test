import React, { Component } from 'react';

import Filter from './filter';
import MovieItem from './movie_item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onPickCompany = company => {
      this.setState({ selectedCompany: company });
    };

    this.state = { selectedCompany: '' };
  }

  render() {
    const movieElements = this.props.movies
      .filter(({ company }) => {
        return !this.state.selectedCompany ||
          company === this.state.selectedCompany;
      })
      .map((movie, key) => {
        return <MovieItem key={key} movie={movie} />;
      });

    return (
      <div className="App">
        <div className="filter-section">
          <h2 className="filter-title">Company: </h2>
          <Filter
            movies={this.props.movies}
            handleChange={this.onPickCompany}
          />
        </div>
        {movieElements}
      </div>
    );
  }
}

export default App;

