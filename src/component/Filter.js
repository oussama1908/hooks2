import React, { useState } from 'react';
import StarRating from './StarRating'; // Make sure to update the import path based on your project structure

function Filter({ onFilter, addNewMovie, movies }) {
  // State for filtering by movie title
  const [titleFilter, setTitleFilter] = useState('');

  // State for filtering by movie rating
  const [ratingFilter, setRatingFilter] = useState(0);

  // State to manage adding a new movie
  const [isAddingMovie, setIsAddingMovie] = useState(false);

  // State to store data for a new movie to be added
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    rating: 0,
    imageUrl: '',
  });

  // Function to handle changes in the movie title input
  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilter({ title: e.target.value, rating: ratingFilter });
  };

  // Function to handle changes in the movie rating input
  const handleRatingChange = (nextValue) => {
    // Toggle off the rating if it's already selected
    const newRating = ratingFilter === nextValue ? 0 : nextValue;
    setRatingFilter(newRating);
    onFilter({ title: titleFilter, rating: newRating });
  };

  // Function to handle adding a new movie
  const handleAddMovie = () => {
    if (isAddingMovie) {
      addNewMovie(newMovie);
      // Reset the new movie data
      setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
    }
    // Toggle the "isAddingMovie" state to switch between input and button
    setIsAddingMovie(!isAddingMovie);
  };

  // Function to handle canceling the addition of a new movie
  const handleCancel = () => {
    setIsAddingMovie(false);
    // Reset the new movie data
    setNewMovie({ title: '', description: '', rating: 0, imageUrl: '' });
  };

  return (
    <div className="flex">
      <h2>Find Your Movie</h2>
      <div className="input-box">
        <div className="flexo">
          <h3>By Name</h3>
          {/* Input field for filtering by movie title */}
          <input
            type="text"
            placeholder="Write the movie name"
            value={titleFilter}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flexb">
          <h3>By Stars</h3>
          <div className="mine">
            {/* StarRating component for filtering by movie rating */}
            <StarRating
              initialValue={ratingFilter}
              onChange={handleRatingChange}
              isEditing={true} // Set it as "true" to enable user interaction
            />
            {/* Display the selected rating */}
            <p className="poor">Selected Rating: {ratingFilter}</p>
          </div>
        </div>
      </div>
      {/* Conditional rendering based on whether a new movie is being added */}
      {isAddingMovie ? (
        <div>
          <h3>Add Movie</h3>
          {/* Input fields for adding a new movie */}
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newMovie.imageUrl}
            onChange={(e) =>
              setNewMovie({ ...newMovie, imageUrl: e.target.value })
            }
          />
          {/* Buttons for adding or canceling the addition of a new movie */}
          <button className="btn btn-danger" onClick={handleAddMovie}>
            Add Movie
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        // Button for initiating the addition of a new movie
        <button className="btn btn-danger" onClick={handleAddMovie}>
          Add Movie
        </button>
      )}
    </div>
  );
}

export default Filter;
