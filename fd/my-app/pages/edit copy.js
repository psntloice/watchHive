import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/add.module.css';
import { addToFavorites } from "../utils/module_call";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const MySlider = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Slide 1', image: 'tv.png' },
    { id: 2, title: 'Slide 2', image: 'tv.png' },
    { id: 3, title: 'Slide 3', image: 'tv.png' },
  ]);
  
  const [newMovie, setNewMovie] = useState({ title: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = movies.length + 1;
    setMovies([...movies, { id, ...newMovie }]);
    setNewMovie({ title: '', image: '' });
  };
  const sampleMovie = {
    name: 'Reality'
  };
  


  return (
    <div className={styles.carousel_container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input 
              type="text" 
              name="title" 
              value={newMovie.title} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input 
              type="text" 
              name="image" 
              value={newMovie.image} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Movie</button>
      </form>
      <button onClick={() => addToFavorites(sampleMovie)}>Hey</button>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.slide}>
            <h3>{movie.title}</h3>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
