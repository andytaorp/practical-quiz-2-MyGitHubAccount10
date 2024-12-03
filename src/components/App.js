import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    setMovies((prevMovies)=>[...prevMovies, title]);
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((prevMovies) => prevMovies.map(
      (movie) => movie.id === id ? {...movie, watched: !movie.watched} : movie
    ));
  }


  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevMovies)=>prevMovies.filter((movie)=>movie.id !== id))
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList 
        movies={movies}
        onDeleteMovie={handleDeleteMovie}
        onToggleWatched={handleToggleWatched}
      />
    </div>
  );
}

export default App;
