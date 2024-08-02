import React, { useState } from 'react';

const GenreForm = ({ onAddGenre }) => {
  const [newGenre, setNewGenre] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGenre(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGenre(newGenre);
    setNewGenre({ name: '' });
  };

  return (
    <div>
      <h2>Add Genre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={newGenre.name} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Genre</button>
      </form>
    </div>
  );
};

export default GenreForm;
