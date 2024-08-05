import React, { useState } from 'react';
import {Input} from "@nextui-org/input";


const AuthorForm = ({ onAddAuthor }) => {
  const [newAuthor, setNewAuthor] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAuthor(newAuthor);
    setNewAuthor({ name: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          
            <Input
type="text" 
name="name" 
value={newAuthor.name} 
onChange={handleChange} 
required 
          color= "primary"
          label="Author"
          placeholder="Enter author's name"
          defaultValue=" "
          className="max-w-[220px]"
        />
        </div>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

export default AuthorForm;
