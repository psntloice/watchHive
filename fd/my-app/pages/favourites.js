import React, { useState } from 'react';
import {Image} from "@nextui-org/image";
import {Input} from "@nextui-org/input";
import {Switch} from "@nextui-org/react";

const Favourites = ({ onAddMovie, genres, authors }) => {
  const [newMovie, setNewMovie] = useState({
    title: '', 
    type: '', 
    genre_id: '', 
    author_id: '', 
    picture_url: '', 
    first_release_date: '', 
    next_release_date: '', 
    sequel_id: '', 
    has_sequel: false, 
    is_upcoming: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMovie(prevState => ({ 
      ...prevState, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '', 
      type: '', 
      genre_id: '', 
      author_id: '', 
      picture_url: '', 
      first_release_date: '', 
      next_release_date: '', 
      sequel_id: '', 
      has_sequel: false, 
      is_upcoming: false
    });
  };
  const images = [
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    // more images
  ];
  

  return (
  
    <div>
    <div>
    <Switch 
     color="success"
     defaultSelected>
      Genre
    </Switch>
    <Switch defaultSelected>
      Actor
    </Switch>
    <Switch defaultSelected>
      Author
    </Switch>
    <Switch
      defaultSelected
      size="lg"
      color="success"
      
    >
      Dark mode
    </Switch>
    
    </div>
    <div  style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '16px',
    }}>
         {images.map((image, index) => (
            <div key={index} style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                width={150}
                height={150}
                src={image}
                alt={`Image ${index + 1}`}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <h1>hjv</h1>
            </div>
          ))}
     
     <Image
    width={300}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
  />
    </div>
    </div>
  );
};

export default Favourites;
