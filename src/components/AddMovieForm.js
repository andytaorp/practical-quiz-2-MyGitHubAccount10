import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
  
      if (!title) return;
  
      const newMovie = {
        id: Date.now(),
        title,
        watched: false,
      }
  
      onAddMovie(newMovie);
      setTitle("");
  }

   // TODO: add a form to add a new movie 
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>adds a new movie</h3>
      <input type="text" placeholder="Movie Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <button type="submit">Add Movie</button>
    </form>
  );
}
