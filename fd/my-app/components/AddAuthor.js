import React, { useState } from 'react';
import {Input} from "@nextui-org/input";


const AuthorForm = ({ onAddAuthor }) => {
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Details about Movie 1', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 2, title: 'Movie 2', description: 'Details about Movie 2', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 3, title: 'Movie 3', description: 'Details about Movie 3', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 4, title: 'Movie 4', description: 'Details about Movie 4', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 5, title: 'Movie 5', description: 'Details about Movie 5', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 6, title: 'Movie 6', description: 'Details about Movie 6', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 7, title: 'Movie 7', description: 'Details about Movie 7', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },

    // Add more movie objects as needed
  ];
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
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
   
    
  ];
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
    },
    {
      key: "2",
      name: "Tony Reichert",
      role: "CEO",
    },
  ];
  return (
    <div className='flex flex-row h-full bg-midnight text-tahiti p-4'>
      <form onSubmit={handleSubmit} className=' w-3/6'>
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
          className="max-w-[220px] "
        />
         </form>

         <div className=' w-3/6 pb-px' style={{ overflowY: 'auto', maxHeight: '80vh', background: 'transparent', border: '2px', borderRadius: '15px' }}>
         {movies.map((movie) => (
              <div key={movie.id} className='text-sm subpixel-antialiased p-px' style={{ minHeight:'25px', marginBottom: '7px', border: '1px solid #ddd', borderRadius: '8px', background: '#E6F1FE', color: '#006FEE' }}>
                                 <h3>{movie.title}</h3>

              </div>
            ))}
        </div>
</div>     
  );
};

export default AuthorForm;
