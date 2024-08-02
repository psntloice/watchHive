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
      <h2>Add Author</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={newAuthor.name} 
              onChange={handleChange} 
              required 
            />
            <Input
          type="email"
          color= "primary"
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />
          </label>
        </div>
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
};

export default AuthorForm;
