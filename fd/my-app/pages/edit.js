import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/edit.module.css';
import MovieForm from '../components/AddMovie';
import AuthorForm from '../components/AddAuthor';
import GenreForm from '../components/AddGenre';
import ActorForm from '../components/AddActor';
import { addToFavorites } from "../utils/module_call";
import { Chip } from "@nextui-org/react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";


const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const MyEdits = ({ isOpen, onRequestClose, onSubmit, formData, handleChange }) => {




  const [showAddMovies, setShowAddMovies] = useState(false);
  const [showAddAuthors, setShowAddAuthors] = useState(true);
  const [showAddGenres, setShowAddGenres] = useState(true);
  const [showAddActors, setShowAddActors] = useState(true);

  const toggleAddMovies = () => setShowAddMovies(!showAddMovies);
  const toggleAddAuthors = () => setShowAddAuthors(!showAddAuthors);
  const toggleAddGenres = () => setShowAddGenres(!showAddGenres);
  const toggleAddActors = () => setShowAddActors(!showAddActors);

  const [movies, setMovies] = useState([
    { id: 1, title: 'Slide 1', image: 'tv.png' },
    { id: 2, title: 'Slide 2', image: 'tv.png' },
    { id: 3, title: 'Slide 3', image: 'tv.png' },
  ]);

  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch genres and authors from your API
    // setGenres(fetchedGenres);
    // setAuthors(fetchedAuthors);
  }, []);

  const handleAddMovie = (movie) => {
    // Add logic to handle movie submission
    console.log('Adding movie:', movie);
  };

  const handleAddAuthor = (author) => {
    // Add logic to handle author submission
    console.log('Adding author:', author);
  };

  const handleAddGenre = (genre) => {
    // Add logic to handle genre submission
    console.log('Adding genre:', genre);
  };

  const handleAddActor = (actor) => {
    // Add logic to handle actor submission
    console.log('Adding actor:', actor);
  };

  const sampleMovie = {
    name: 'Reality'
  };

  const imageUrls = [
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    // more images
  ];
  const [expandedDiv, setExpandedDiv] = useState(null);

  const toggleDiv = (div) => {
    setExpandedDiv(expandedDiv === div ? null : div); // Toggle the div expansion
    console.log("clicked");
  };
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div   style={{
          background: `
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" font-size="30" fill="rgba(0,0,0,0.1)" text-anchor="middle" alignment-baseline="middle">Background Text</text></svg>') no-repeat center,
          rgba(0, 0, 0, 0.1)`,
          backgroundColor: "transparent",
          border: "1px outset #4058b9",
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden",
          height: expandedDiv === "div" ? "auto" : "20%",
        }}
        className="rounded-lg   w-2/6"
              onClick={() => toggleDiv("div")}>
                {expandedDiv === "div" && (
        <div  style={{ width:'100%',  background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)'}}
         className=" rounded-lg h-full bg-opacity-{25} shadow-2xl shadow-[0px_10px_30px_rgba(196, 181, 253)]"> 
        <AuthorForm />
        
        </div>
          )}
        </div>
        <div  className={styles.actor}>
        <ActorForm />
        </div>
        <div className={styles.genre}>
        <GenreForm/>
        </div>
      </div>
      <div className={styles.down}>
         <MovieForm /> {/*this has errors on ui */}
      </div>
    </div>

  );
};

export default MyEdits;


  {/* <div className={styles.buttons}>
        <button onClick={toggleAddGenres}>Add Genres</button>
        <button onClick={toggleAddAuthors}>Add Authors</button>
        <button onClick={toggleAddActors}>Add Actors</button>
        <button onClick={toggleAddMovies}>Add Movies</button>
      </div>
      <div className={styles.content}>
        <div className={`${showAddGenres ? styles.expanded : styles.collapsed}`}>
          <GenreForm />
        </div>
        <div className={`${showAddAuthors ? styles.expanded : styles.collapsed}`}>
          <AuthorForm />
        </div>
        <div className={`${showAddActors ? styles.expanded : styles.collapsed}`}>
          <ActorForm />
        </div>
        <div className={`${showAddMovies ? styles.expanded : styles.collapsed}`}>
          <MovieForm />
        </div>
      </div>
      <button className={styles.expanded-button} onClick={toggleAddMovies}>
        {showAddMovies ? 'Hide Add Movies' : 'Show Add Movies'}
      </button> */}