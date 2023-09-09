import React from 'react';
import MovieCard from '../component/MovieCards'; 

function MovieList({ id,movies, onRemove }) {
  const handleRemoveMovie = (id) => {
    // Filter out the movie with the matching title to remove it
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    onRemove(updatedMovies);
  };

  return (
    <div className="movie-list-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} onRemove={handleRemoveMovie} className="card bg-light" />
      ))}
    </div>
  );
}

export default MovieList;
