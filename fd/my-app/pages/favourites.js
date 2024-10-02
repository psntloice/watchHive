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
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // more images
  ];
  const [switchStates, setSwitchStates] = useState({
    genre: false,
    actor: false,
    author: false,
  });

  // Function to toggle a specific switch
  const toggleSwitch = (switchName) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [switchName]: !prevStates[switchName], // Toggle the specific switch
    }));
  };
 

  return (
  
    <div>
      <div style={{
      display: 'flex',
      gap: '16px',
    }}>
      <div>
      {/* Label Text */}
    <label onClick={() =>toggleSwitch('genre')} className="text-gray-700 cursor-pointer">
        Genre
      </label>
    <div 
      onClick={() =>toggleSwitch('genre')}
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.genre ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
       
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.genre ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
    </div>
    <div>
      {/* Label Text */}
      <label onClick={() =>toggleSwitch('actor')} className="text-gray-700 cursor-pointer">
Actor      </label>
    <div 
      onClick={() =>toggleSwitch('actor')}
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.actor ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
       
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.actor ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
    </div>
    <div>
      {/* Label Text */}
      <label onClick={() =>toggleSwitch('author')} className="text-gray-700 cursor-pointer">
Author      </label>
    <div 
      onClick={() =>toggleSwitch('author')}
      className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.author ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
       
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.author ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
    </div>
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
    src="https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
  />
    </div>

    </div>
  );
};

export default Favourites;
