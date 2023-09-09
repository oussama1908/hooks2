import React from 'react';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({ id,title, description, rating, imageUrl, onRemove }) {
  const handleRemove = () => {
    onRemove(id); // Pass the title to identify the movie for removal
  };

  return (
    <Card className="card bg-light" style={{ width: "18rem", margin: "10px", padding: "10px" }}>
      <Card.Img style={{ width: "17rem", height: "18rem" }} variant="top" src={imageUrl} />
      <Card.Body className="container">
        <Card.Title>{title}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <div className='cardtext'>
          Rating:
          <div className='cardtexto' >
            <StarRatingComponent
              name={`rate${title}`}
              starCount={5}
              editing={false}
              value={Number(rating)}
            />
          </div>
        </div>
        <button className="btn btn-danger" onClick={handleRemove}>
          Remove
        </button>
        
      </Card.Body>
    </Card>
  );
}

export default MovieCard;