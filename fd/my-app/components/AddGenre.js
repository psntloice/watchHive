import React, { useState } from 'react';
import {Input} from "@nextui-org/input";

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
      <form onSubmit={handleSubmit}>
      <div>
           
           <Input
   type="text" 
   name="name" 
   value={newGenre.name} 
   onChange={handleChange} 
   required 
             color= "primary"
             label="Author"
             placeholder="Enter author's name"
             defaultValue=" "
             className="max-w-[220px]"
           />
           </div>
        <button type="submit">Add Genre</button>
      </form>
    </div>
  );
};

export default GenreForm;
