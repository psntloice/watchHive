import React, { useState } from 'react';
import {Image} from "@nextui-org/image";
import {Input} from "@nextui-org/input";
import {Switch} from "@nextui-org/react";

const Favourites = () => {
 
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
      gap: '3%',
      width:'60%',
    }}>
      <div  style={{
      display: 'flex', 
      width:'60%',
      gap: '5%'    
    }}>
      {/* Label Text */}
    <label onClick={() =>toggleSwitch('genre')} className="text-gray-700 text-base tracking-widest font-mono font-light cursor-pointer">
        genre
      </label>
    <div 
      onClick={() =>toggleSwitch('genre')}
      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.genre ? 'bg-blue-200' : 'bg-blue-50'
      }`}
    >
       
      <div
        className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.genre ? 'translate-x-4' : ''
        }`}
      ></div>
    </div>
    </div>




    <div style={{
      display: 'flex', 
      width:'60%',    
      gap: '5%'    
  
    }}>
      {/* Label Text */}
      <label onClick={() =>toggleSwitch('actor')} className="text-gray-700 tracking-widest text-base font-light cursor-pointer">
actor      </label>
    <div 
      onClick={() =>toggleSwitch('actor')}
      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.actor ? 'bg-blue-200' : 'bg-blue-50'
      }`}
    >
       
      <div
        className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.actor ? 'translate-x-4' : ''
        }`}
      ></div>
    </div>
    </div>


    <div style={{
      display: 'flex',  
      width:'60%',    
      gap: '5%'    

    }}>
      {/* Label Text */}
      <label onClick={() =>toggleSwitch('author')} className="text-gray-700 tracking-widest text-base font-light cursor-pointer">
author      </label>
    <div 
      onClick={() =>toggleSwitch('author')}
      className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${
        switchStates.author ? 'bg-blue-200' : 'bg-blue-50'
      }`}
    >
       
      <div
        className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          switchStates.author ? 'translate-x-4' : ''
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
