import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import '../App';

function MovieCard({ id, title, description, rating, imageUrl, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState({
    id,
    title,
    description,
    rating,
    imageUrl,
  });

  const handleRemove = () => {
    onRemove(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedMovie);
    setIsEditing(false);
  };

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
            {isEditing ? (
              <input className='editstyle'
                type="number"
                value={editedMovie.rating}
                onChange={(e) => setEditedMovie({ ...editedMovie, rating: parseInt(e.target.value) })}
              />
            ) : (
              <StarRatingComponent
                name={`rate${title}`}
                starCount={5}
                editing={false}
                value={Number(rating)}
              />
            )}
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
