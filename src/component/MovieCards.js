import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CustomStarRating from '../component/StarRating';

function MovieCard({ id, title, description, rating, imageUrl, onRemove, onEdit }) {
  // State to track if the card is in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to store the edited movie data
  const [editedMovie, setEditedMovie] = useState({
    id,
    title,
    description,
    rating,
    imageUrl,
  });

  // Function to handle removing the movie
  const handleRemove = () => {
    onRemove(id);
  };

  // Function to handle entering edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle saving the edited movie
  const handleSave = () => {
    onEdit(editedMovie);
    setIsEditing(false);
  };

  // Function to handle canceling the edit
  const handleCancel = () => {
    setIsEditing(false);
    setEditedMovie({
      id,
      title,
      description,
      rating,
      imageUrl,
    });
  };

  // Function to handle changing the image URL in edit mode
  const handleImageUrlChange = (e) => {
    setEditedMovie({ ...editedMovie, imageUrl: e.target.value });
  };

  return (
    <Card className="card bg-light" style={{ width: "18rem", margin: "10px", padding: "10px" }}>
      <Card.Img
        style={{ width: "17rem", height: "18rem" }}
        variant="top"
        src={editedMovie.imageUrl}
      />
      <br/>
      {isEditing && (
          <input
            type="text"
            value={editedMovie.imageUrl}
            onChange={handleImageUrlChange}
          />
        )}
      <Card.Body className="container">
        <Card.Title>
          {isEditing ? (
            <input
              type="text"
              value={editedMovie.title}
              onChange={(e) => setEditedMovie({ ...editedMovie, title: e.target.value })}
            />
          ) : (
            title
          )}
        </Card.Title>
        <Card.Text>
          {isEditing ? (
            <input
              type="text"
              value={editedMovie.description}
              onChange={(e) => setEditedMovie({ ...editedMovie, description: e.target.value })}
            />
          ) : (
            `Description: ${description}`
          )}
        </Card.Text>
        <div className='cardtext'>
          Rating:
          <div className='cardtexto'>
            <CustomStarRating
              initialValue={editedMovie.rating}
              onChange={(newRating) => setEditedMovie({ ...editedMovie, rating: newRating })}
              isEditing={isEditing} // Pass isEditing prop to the StarRating component
            />
          </div>
        </div>
        <br/>
        
        {isEditing && (
          <div className="movie-card-actions">
            <button className="btn btn-success mr-3" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}

        {!isEditing && (
          <div className="movie-card-actions ">
            <button className="btn btn-danger mr-3" onClick={handleRemove}>
              Remove
            </button>
            <button className="btn btn-warning" onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
