import React, { useState } from 'react';

const ActorForm = ({ onAddActor }) => {
  const [newActor, setNewActor] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActor(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActor(newActor);
    setNewActor({ name: '' });
  };

  return (
    <div>
      <h2>Add Actor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={newActor.name} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Actor</button>
      </form>
    </div>
  );
};

export default ActorForm;
