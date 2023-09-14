import React from 'react';
import MovieCard from '../component/MovieCards';

function MovieList({ movies, onRemove, onEdit }) {
  // Handle the removal of a movie by calling the provided onRemove function
  const handleRemoveMovie = (id) => {
    onRemove(id);
  };

  return (
    <div className="movie-list-container">
      {/* Map through the list of movies and create a MovieCard component for each */}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          onRemove={handleRemoveMovie} // Pass the handleRemoveMovie function as a prop
          onEdit={onEdit} // Pass the onEdit function as a prop
        />
      ))}
    </div>
  );
}

export default MovieList;
