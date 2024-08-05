import React, { useState } from 'react';
import {Input} from "@nextui-org/input";

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
     <form onSubmit={handleSubmit}>
        <div>
           
        <Input
type="text" 
name="name" 
value={newActor.name} 
onChange={handleChange} 
required 
          color= "primary"
          label="Author"
          placeholder="Enter author's name"
          defaultValue=" "
          className="max-w-[220px]"
        />
        </div>
        <button type="submit">Add Actor</button>
      </form>
    </div>
  );
};

export default ActorForm;
