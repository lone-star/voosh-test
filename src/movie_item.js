import React from 'react';

const MovieItem = ({ movie: { image, company, name, url } }) => {
  return (
    <div className="movie-item">
      <img src={image} alt={name} />
      <a href={url}>
        <div>
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div>
          <span>Company: </span>
          <span>{company}</span>
        </div>
      </a>
    </div>
  );
};

export default MovieItem;

