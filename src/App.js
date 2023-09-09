import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [initialMovies] = useState([
    {
      id:uuidv4(),
      title: "Punisher",
      description: "Action",
      rating: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/Punisher_ver2.jpg",
    },
    {
      id:uuidv4(),
      title: "Hitman",
      description: "Action",
      rating: 3,
      imageUrl: "https://m.media-amazon.com/images/I/71PU4YDq+mL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id:uuidv4(),
      title: "Resident Evil",
      description: "Action",
      rating: 2,
      imageUrl: "https://tube.hk/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fimages%2Ftitles%2Fmovie%2F571%2Fposters%2Fresident_evil-us_teaser.jpg&w=1920&q=75",
    },
    {
      title: "Prince of Persia",
      description: "Action",
      rating: 3,
      imageUrl: "https://flxt.tmsimg.com/assets/p3546197_p_v8_av.jpg",
    },
  ]);

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const filterMovies = ({ title, rating }) => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating === 0 || movie.rating === rating)
      );
    });
    setFilteredMovies(filteredMovies);
  };

  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, id: uuidv4() }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const editMovie = (editedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === editedMovie.id ? { ...editedMovie } : movie
    );
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="App">
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-start text-xl">
          <Navbar.Brand className="sizetext" href="#home">
            Netflix
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Filter onFilter={filterMovies} addNewMovie={addMovie} />
      <MovieList
        movies={filteredMovies}
        onRemove={removeMovie}
        onEdit={editMovie}
      />
    </div>
  );
}

export default App;
