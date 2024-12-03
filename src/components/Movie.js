import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
export default function Movie({movies, onDeleteMovie, onToggledWatched}) {
    return (
        <div>
          <ul>
            {movies.map((movie) => (
              <MovieList checkingMovie={movie} key={movie.id} onDeleteMovie={onDeleteMovie} onToggledWatched={onToggledWatched}/>
            ))}
          </ul>
        </div>
      );
    }
  
    function MovieList({checkingMovie, onDeleteMovie, onToggledWatched}) {
      return (
      <li>
          <input
            type="checkbox"
            value={checkingMovie.packed}
            onChange={() => onToggledWatched(checkingMovie.id)}
          />
          <span style = {checkingMovie.watched ? {textDecoration:"line-through"} : {}}> {checkingMovie.title}
          </span>
          <button onClick={()=>onDeleteMovie(checkingMovie.id)}>❌</button>
      </li>);
}
