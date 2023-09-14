import React, { useState } from 'react';

function StarRating({ initialValue, onChange, isEditing }) {
  // Initialize the rating state with the provided initialValue
  const [rating, setRating] = useState(initialValue);

  // Handle a star click event
  const handleStarClick = (newRating) => {
    if (isEditing) {
      // Clear the rating if the clicked star is already selected
      const updatedRating = rating === newRating ? 0 : newRating;
      setRating(updatedRating);
  
      // Optionally, you can pass the new rating to a callback function (onChange).
      if (onChange) {
        onChange(updatedRating);
      }
    }
  };

  return (
    <div className="star-rating">
      {/* Map through the stars and create clickable star elements */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${isEditing ? '' : 'read-only'} ${
            star <= rating ? 'filled' : ''
          }`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
