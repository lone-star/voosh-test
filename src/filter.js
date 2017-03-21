import React from 'react';

const Filter = ({ movies, handleChange }) => {
  const movieCompanies = [ ...new Set(movies.map(movie => movie.company)) ];

  const companyOptions = movieCompanies.map(company => {
    return <option key={company} value={company}>{company}</option>;
  });

  return (
    <select onChange={e => handleChange(e.target.value)}>
      <option key={-1} value="">All</option>{companyOptions}
    </select>
  );
};

export default Filter;

