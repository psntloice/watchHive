import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/edit.module.css';
import MovieForm from '../components/Movie';
import {Input} from "@nextui-org/input";


const Library = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredMovies, setFilteredMovies] = useState([]);
  // const handleSearchChange = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   if (movieData) {
  //     // Filter movies based on search query
  //     const filtered = movieData.filter((movie) =>
  //       movie.name.toLowerCase().includes(query) ||
  //       movie.genre.toLowerCase().includes(query) ||
  //       movie.actors.some((actor) => actor.toLowerCase().includes(query))
  //     );
  //     setFilteredMovies(filtered);
  //   }
  //   const displayedMovies = searchQuery ? filteredMovies : movieData;
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '6px' }}>
        {/* Input Component */}
        <div style={{ flex: '0 1 8%' }}>
          <Input 
            value={searchQuery}
            onChange={handleSearchChange}
            type="email" label="by name/author/genre/actor" 
            style={{ width: '100%' }}
            onClear={() => setSearchQuery('')} 
                         />
        </div>
      
        {/* MovieForm Component */}
        <div style={{ flex: '1' }}>
          <MovieForm className="w-full bg-white" searchQuery={searchQuery} />
        </div>
      </div>
    );

};
export default Library;