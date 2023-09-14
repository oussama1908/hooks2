# Movie Catalog React App

This is a simple React-based movie catalog application that allows users to filter and manage their movie collection. Users can search for movies by title and rating, add new movies to their collection, edit existing movies, and remove movies from the list.

## Features

- **Filter Movies**: Users can filter their movie collection by movie title and rating. The application dynamically updates the displayed movies as the user enters filter criteria.

- **Add New Movies**: Users can add new movies to their collection by providing details such as title, description, rating, and image URL. New movies are appended to the existing list.

- **Edit Movies**: Users can edit existing movies by clicking on the "Edit" button on each movie card. This allows them to modify movie details, including the title, description, rating, and image URL. The changes can be saved or canceled.

- **Remove Movies**: Users can remove movies from their collection by clicking on the "Remove" button on each movie card.

## Project Structure

The project is organized into several components:

- **App**: The main component that renders the entire application. It manages the state of the movie list and provides functions for adding, editing, and removing movies.

- **Filter**: This component handles the movie filtering functionality and includes a form for adding new movies.

- **MovieList**: This component displays the list of movies based on the filter criteria and handles movie removal.

- **MovieCard**: Each movie in the list is represented as a `MovieCard` component. It displays movie details and provides options for editing and removing movies.

## Callback Functions

Callback functions play a crucial role in enabling interactivity within the application. Here's how they are used:

- **filterMovies({ title, rating })**: This callback function is used in the `App` component and is passed to the `Filter` component. It filters the movie list based on user-entered criteria for title and rating.

- **addMovie(newMovie)**: Another callback function in the `App` component passed to the `Filter` component. It allows the `Filter` component to add a new movie to the list when the user submits the movie details via the form.

- **handleRemoveMovie(updatedMovies)**: Used in the `App` component and also passed to the `Filter` component. This function handles movie removal and updates the movie list when a movie is removed.

- **handleAddMovie()**: In the `Filter` component, this callback function adds a new movie to the list when the user clicks the "Add Movie" button.

- **handleEdit()**: In the `Filter` component, this function toggles editing mode for a movie card, allowing users to edit movie details.

- **handleSave()**: In the `Filter` component, this callback function saves changes made during movie editing.

- **handleCancel()**: In the `Filter` component, this function cancels the addition of a new movie or cancels editing mode.

- **handleRemoveMovie(id)**: Used in the `Filter` component and passed to the `MovieList` component to handle movie removal.

## Editing Logic

The editing functionality in this application allows users to modify existing movie details. Here's the logic behind it:

1. When the user clicks the "Edit" button on a movie card, the `handleEdit()` function is called. This function toggles editing mode for that card.

2. In editing mode, the movie card's details are replaced with input fields for editing, including title, description, rating, and image URL.

3. Users can make changes to the movie's details.

4. Two buttons appear: "Save" and "Cancel." Clicking "Save" saves the changes made, and clicking "Cancel" reverts to the original details.

5. The `handleSave()` function is called when the "Save" button is clicked, which updates the movie details.

6. The `handleCancel()` function is called when the "Cancel" button is clicked, which cancels the editing mode and reverts to the original details.

These editing logic steps provide users with a straightforward and intuitive way to modify movie information.
