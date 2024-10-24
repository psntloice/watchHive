import React, { useState, FormEvent, useEffect } from 'react';
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import Uploady, {useItemFinishListener, useBatchAddListener, useUploady } from '@rpldy/uploady';
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import styles from '../styles/addmovie.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UploadDropZone from "@rpldy/upload-drop-zone";
import dynamic from 'next/dynamic';
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';


//uploadcomponent
const UploadComponent = ({ onFilesUploaded }) => {
    //states
  const [files, setFiles] = useState([]);
  const [finished, setFinished] = useState([]);

  // Hook to listen for new files added
  useBatchAddListener((batch) => {
    setFiles((prevFiles) => [...prevFiles, ...batch.items.map(item => item.file)]);
  });
 
  //functions
  const handleFileUpload = async () => {
    try {
      for (let file of files) {
        const formData = new FormData();
        formData.append('file', file);
      }
      const uploadFiles = files.map((file) => {
        return {
            file: file, // Send the uploaded file along with other data
            name: file.name // Include file name
        };
    });
      // Call the callback function with the uploaded files
      if (onFilesUploaded) {
        onFilesUploaded(uploadFiles);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <button className=' w-4/5 h-2/3 self-center rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500'   type="button" // Ensure it's not "submit"
  onClick={(event) => {
    event.preventDefault(); // Prevent any form submission behavior
    handleFileUpload(); // Trigger the file upload handling
  }}  disabled={!files.length}>
Submit      </button>
    </div>
  );
};


//main form
const ActorForm = () => {
    //environment and variables
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const initialMovieData = {
      title: '',
      type: '',
      first_release_date: '',
      next_release_date: '',
      author_id: null,
      genre_id: [],
      actor_id: [],
      has_sequel: '',
      sequel_id: null,
      is_upcoming: '',
      description: '',
      // Add other fields if necessary
    };
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 10, // Adjust this based on the number of images you want visible at once
      slidesToScroll: 1, // Number of slides to scroll at once
      centerMode: false, // Do not center the active slide
    };
    const myboolean = [0, 1];
    const myType = ["Movie", "Series"];

    //states
  const [go, setGo] = useState(false);
  const [newmovieData, setMovieData] = useState(initialMovieData);
  const [activeMovieId, setActiveMovieId] = useState(null);
  const [selectedValue, setSelectedValue] = useState("true");  // default to string "true"
  const [isActive, setIsActive] = useState({});


  //calls to api
  const getMovie = async () => {
    try {
      const data = await get_call_module("shows")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const removeMovie = async (id) => {
    try {
      const data = await delete_call_module("shows", id);
      refetch();
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting authors:', error);
    }
  };
  const updateMovie = async (id, payload) => {
    try {
      // Transform the data format
      const author = {
        name: payload.rename,
        description: payload.redescription
      };

      // Use the renamed author object as needed
      console.log(author);
      const data = await put_call_module(author, "authors", id);
    } catch (error) {
      console.error('Error deleting authors:', error);
    }
  };
  const getAuthor = async () => {
    try {
      const data = await get_call_module("authors")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const getActor = async () => {
    try {
      const data = await get_call_module("actors")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const getGenre = async () => {
    try {
      const data = await get_call_module("genres")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const removeFromFavs = async (id) => {
    try {
      const data = await delete_call_module("favourites", id);
      // refetch();
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting authors:', error);
    }
  };
  const addToFavourites = async (payload) => {
    try {
      const data = await post_call_module(payload, "favourites");
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error adding:', error);
    }
  }
  const getFavourites = async () => {
    try {
      const data = await get_call_module("favourites")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const { isLoading: isFavLoading, data: favData, error: favError } = useQuery({
    queryKey: ['favs'],
    queryFn: getFavourites,
  })
  const { isLoading: isMovieLoading, data: movieData, error: movieError, refetch } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovie,
  })
  const { isLoading: isAuthorLoading, data: authorData, error: authorError } = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthor,
  })
  const { isLoading: isActorLoading, data: actorData, error: actorError } = useQuery({
    queryKey: ['actors'],
    queryFn: getActor,
  })
  const { isLoading: isGenreLoading, data: genreData, error: genreError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenre,
  })

  //fuctions
  const toggleGo = () => {
    setGo(!go);
  };
  const handleFilesUploaded = (files) => {
    console.log('My Uploaded files:', files);
    if (files.length > 0) {
      setMovieData((prevData) => ({
        ...prevData,
        picture_url: files[0].file, // Store the first selected file
      }));
    }
  };
  const toggleMovie = (id) => {
    setActiveMovieId(activeMovieId === id ? null : id);
  };
  const handleFavourites = (id) => {
    const payload = {
      user_id: 1,
      show_id: id,
    };
    if(isActive[pickedMovie.id]){removeFromFavs(id);}
    else if(!(isActive[pickedMovie.id])){addToFavourites(payload);}
    setIsActive((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the current value for the specific showId
    }));

  };
  const handleAddMovie = async () => {
    console.log(newmovieData);
    // e.preventDefault();
    // const payload = {
    //   title: 'dfd',
    //   type: 'movie',
    //   genre_id: 9,
    //   author_id: 1,
    //   actor_id: 1,
    //   // sequel_id: '',
    //   has_sequel: 0,
    //   // picture_url: '',
    //   is_upcoming: 1,
    //   first_release_date: '2024-01-05',
    //   next_release_date: '2024-01-05',
    // };
    // await console.log(payload);
    //     const booleanValue = selectedValue === "true";
    // console.log(newmovieData);


    const formData = new FormData();
    
//   // Append movie data
// for (const key in newmovieData) {
//   const value = newmovieData[key];
  
//   // Handle null values
//   if (value === null) {
//     formData.append(key, ''); // Send as an empty string for null
//   } else {
//     formData.append(key, value); // Append the value directly
//   }

//   // Debugging: log the value and the current state of FormData
//   console.log(`${key}:`, value);
// }

// Append movie data
for (const key in newmovieData) {
  const value = newmovieData[key];

  if (Array.isArray(value)) {
    // If the value is an array, JSON.stringify the entire array
    formData.append(key, JSON.stringify(value));
  } else if (value === null) {
    // Handle null values
    formData.append(key, ''); // Send as an empty string for null
  } else {
    // Append the value directly
    formData.append(key, value);
  }

  // Debugging: log the value and the current state of FormData
  console.log(`${key}:`, value);
}
      // Log the FormData contents
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

const response = await fetch('http://localhost:8000/api/shows', {
    method: 'POST',
    body: formData,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
  });
  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }

  const data = await response.json();
  console.log(data); 
 if (!response.ok)return
  setMovieData(initialMovieData);
  // Reload the page
  window.location.reload();
console.log (newmovieData);
        // await addMovie(formData);
    //     // setNewMovie({ name: '', description: '' });
    //     refetch();

  };

   //useeffects
// useEffect(() => {
//   // Check if both pickedMovie and favData are available
//   if (pickedMovie && favData) {
//     // Perform your desired action here
//     console.log("Picked Movie:", pickedMovie);
//     console.log("Favorites Loaded:", favData);

//     // Example action: Check if the picked movie is in the favorites
//     const isFavorite = favData.some(movie => movie.show_id === pickedMovie.id);
//     console.log("Is Picked Movie a Favorite?", isFavorite);
// if(isFavorite)
// {
//   setIsActive((prevState) => ({
//     ...prevState,
//     [pickedMovie.id]: true, // Toggle the current value for the specific showId
//   }));
//   console.log(isActive)
//   console.log(isActive[pickedMovie.id])
// }
// else if(!isFavorite)
// {
//   setIsActive((prevState) => ({
//     ...prevState,
//     [pickedMovie.id]: false, // Toggle the current value for the specific showId
//   }));
//   console.log(isActive)

// }
//     // You can also set state or perform other actions based on this check
//     if (isFavorite) {
//       // Maybe set some state or display a message
//       console.log("This movie is in your favorites!");
//     } else {
//       console.log("This movie is not in your favorites.");
//     }
//   }
// }, [pickedMovie, favData]);


//ifs and their fumctions
  if (isAuthorLoading || isActorLoading || isGenreLoading || isMovieLoading) return 'Loading...'
  if (authorError || actorError || genreError || movieError) return 'An error has occurred: ' + (authorError?.message || actorError?.message || genreError?.message || movieError?.message)

    return (

    <div className={styles.formdiv}>
      <h3 className="text-default-500 text-small">movies</h3>

      <div style={{ flex: '1', width: '96vw', display: 'flex', gap: '2.5em', flexDirection: 'row' }} >

        <form  style={{ flex: '1', width: '96vw', height: '100%', display: 'flex', columnGap: '1em', flexDirection: 'column' }} className='flex flex-row w-4/5'>

          <div style={{ width: '100%', flex: '1', display: 'flex', gap: '10%', flexDirection: 'row', justifyContent: 'space-around' }} className='flex flex-row w-4/5'>
            <div className="flex flex-col gap-4 w-5/12 ">

              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-evenly">
                  <Input type="text" name="name" value={newmovieData.title}
                    onChange={(e) => setMovieData({ ...newmovieData, title: e.target.value })}
                    required color="primary" label="Title" placeholder="movie/series name" defaultValue=" " className="max-w-[220px]" style={{ background: '#E6F1FE' }}
                  />

                  <Select
                    placeholder="Type"
                    variant='bordered'
                    style={{ color: '#155e75', background: '#E6F1FE', borderRadius: '15px' }}
                    className="max-w-52 "
                    onChange={(e) => {
                      setMovieData({ ...newmovieData, type: e.target.value });
                    }}
                  >
                    {myType.map((val) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={val}
                        value={val}
                      >
                        {val}
                      </SelectItem>
                    ))}

                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-evenly">
               
                        <DatePicker label="First Release Date"
                    className="max-w-[284px]" color='primary' isRequired
                    // value={newmovieData.next_release_date }
                    onChange={(value) => {
                      const year = value.year;
                      const month = String(value.month).padStart(2, '0'); // Pad with zero for single-digit months
                      const day = String(value.day).padStart(2, '0'); // Pad with zero for single-digit days
                     
                      const formattedDate = `${year}-${month}-${day}`;
                     
                      // Update the state with the formatted date
                      setMovieData({ ...newmovieData,first_release_date: formattedDate });
                    }
                   
                    } />
                  <DatePicker label="Next Release Date"
                    className="max-w-[284px]" color='primary'
                    // value={newmovieData.next_release_date }
                    onChange={(value) => {
                      const year = value.year;
                      const month = String(value.month).padStart(2, '0'); // Pad with zero for single-digit months
                      const day = String(value.day).padStart(2, '0'); // Pad with zero for single-digit days
                     
                      const formattedDate = `${year}-${month}-${day}`;
                     
                      // Update the state with the formatted date
                      setMovieData({ ...newmovieData, next_release_date: formattedDate });
                    }
                    } />

                </div>
              </div>


              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-around">


                  <Select
                    placeholder="Author"
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    variant='bordered'
                    className="max-w-52 text-blue-500"
                    onChange={(e) => setMovieData({ ...newmovieData, author_id: Number(e.target.value) })}
                  >
                    {authorData.map((author) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={author.id}
                        value={author.id}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    selectionMode="multiple"
                    placeholder="Genre"
                    className="max-w-52"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    onChange={(e) =>{ 
                     const vl = e.target.value;
                     const numberArray = vl.split(',').map(Number);
                      setMovieData({ ...newmovieData,  genre_id:numberArray })}}
                  >
                    {genreData.map((genre) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={genre.id}
                        value={genre.id}>
                        {genre.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    selectionMode="multiple"
                    placeholder="Actor"
                    className="max-w-52"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    onChange={(e) =>{
                      const vl = e.target.value;
                     const numberArray = vl.split(',').map(Number);
                      setMovieData({ ...newmovieData, actor_id: numberArray })}}
                  >
                    {actorData.map((actor) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={actor.id}
                        value={actor.id}>
                        {actor.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-between">
                  <Select
                    placeholder="Has Sequel?"
                    className="max-w-28"
                    variant='bordered'
                    value={selectedValue}
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    onChange={(e) => setMovieData({ ...newmovieData, has_sequel: e.target.value })}
                  >

                    {myboolean.map((val) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={val}>
                        {val ? "Yes" : "No"}
                      </SelectItem>
                    ))}

                  </Select>

                  <Select
                    placeholder="Sequel"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    className="max-w-52"
                    onChange={(e) => setMovieData({ ...newmovieData, sequel_id: Number(e.target.value)  })}
                  >
                    {movieData.map((movie) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={movie.id}
                                                  value={movie.id}>

                        {movie.title}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    placeholder="Is Upcoming?"
                    className="max-w-40"
                    variant='bordered'
                    value={selectedValue}
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    onChange={(e) => setMovieData({ ...newmovieData, is_upcoming: e.target.value })}
                  >
                    {myboolean.map((val) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={val}>
                        {val ? "Yes" : "No"}
                      </SelectItem>
                    ))}
                  </Select>


                </div>
                <div>    
                         <Textarea
                  placeholder="Movie description"
                  value={newmovieData.description}
                  onChange={(e) => setMovieData({ ...newmovieData, description: e.target.value })}
defaultValue=" "
                  style={{ borderRadius: '3px', color: '#155e75', background: '#E6F1FE' }}
                /></div>
              </div>

            </div>
            <div className="flex flex-col gap-4 w-2/5 h-full bg-sky-500 border-y-4 border border-blue-700 rounded-3xl">
              {/* <Uploady destination={{ url: " " }}> */}
              <Uploady
              destination={{ url: "" }}
      // autoUpload={false} // Prevents automatic upload
    >
                <UploadDropZone
                  onDragOverClassName="drag-over"
                  grouped
                  maxGroupSize={1}
                  className='h-3/4 content-center bg-transparent color-black text-black rounded-lg text-end text-tahiti'
                >
                  <h2 className='w-full text-center color-black  text-tahiti'
                  >Drag&Drop File(s) Here</h2>
                </UploadDropZone>
                <UploadPreview
                  fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg" />
                
                
                <UploadButton   onClick={(e) => {
    e.preventDefault(); // Prevent default behavior
    // Optionally, you can add custom logic here if needed
  }} className='size-6 w-3/5 self-center rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500'  >
  Choose Picture
  </UploadButton>


                <UploadComponent  onFilesUploaded={handleFilesUploaded} />

              </Uploady>
            </div>
          </div>
          <div style={{ height: '12%', display: 'flex', justifyContent: 'space-around' }}>
            <button   type="button" 
  onClick={() => {
    toggleGo(); // First function
    handleAddMovie(); // Second function
  }}  className='w-1/6 h-full border-y-8 rounded-s-3xl bg-gradient-to-br from-blue-500 to-purple-600 w-1/6 h-2/3 content-end'>
              Add/Save</button>

          </div>
        </form>

        <div style={{ position: 'relative', height: '100%', justifyContent: 'center', color: 'black' }} className="w-1/4">
          <div style={{ overflowY: 'auto', maxHeight: '80vh', padding: '10px', background: 'linear-gradient(to top, #4058b9  5%, #babccf 30%)', height: '43vh', border: '0px', borderRadius: '15px' }}>
          {movieData.length > 0 ? (  movieData.map((movie) => (
              <div key={movie.id} style={{ marginBottom: '7px', border: '1px solid #ddd', borderRadius: '8px', background: 'transparent' }}>
                <div
                  onClick={() => toggleMovie(movie.id)}
                  style={{
                    cursor: 'pointer',
                    padding: '10px',
                    backgroundColor: activeMovieId === movie.id ? 'linear-gradient(to top, #4755ed 5%, #f9f9f9 30%)' : 'transparent',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <div style={{
                    display: 'flex'
                  }}> <h3>{movie.title} ({movie.type}) </h3>
                    <button className="flex justify-self-center max-w-max content-start bg-transparent" style={{ background: 'transparent' }} onClick={() => handleFavourites(movie.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill={isActive[movie.id] ? 'red' : 'transparent'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </button>
                  </div>
                  <div
                    style={{
                      borderRadius: '5px',
                      maxHeight: activeMovieId === movie.id ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      padding: activeMovieId === movie.id ? '10px' : '0',
                      background: 'linear-gradient(to top, #f9f9f9 5%, transparent 70%)',
                    }}
                  >
                    {activeMovieId === movie.id && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        backgroundColor: 'transparent',
                      }}>
                        <div>

                          <Image
                            width={150}
                            height={150}
                            src={`${baseUrl}/storage/${movie.picture_url}`}
                            alt={`Image ${movie.id + 1}`}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '5px',
                          backgroundColor: 'transparent',
                        }}>

                          <p> Written By: {movie.author.name}</p>
                          <p>  Genre: {movie?.genres?.map((genre) => genre.name).join(", ")}</p>
                          {/* <p>  Actors: {movie.actor.name}</p> */}
                          <p> First release: {movie.first_release_date}</p>
                          <p> Next release: {movie.next_release_date}</p>
                          <p>  Sequel: {
    movie.sequel_id 
          ? movieData.find(m => m.id === movie.sequel_id)
            ? `${movieData.find(m => m.id === movie.sequel_id).title}`
            : "No sequel found"
          : "No sequel"
  }</p>
                          <p> {movie.description}</p>
                          <p>  Actors: {movie?.actors?.map((actor) => actor.name).join(", ")}</p>


                          <div>
                            <button onClick={(e) => e.stopPropagation()} type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{ background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}>edit</button>
                            <button onClick={() => removeMovie(movie.id)} type="button" className="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{ background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3.5">
                                <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          {/* Add more details or components here as needed */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))) : (
              <p>No movies found</p>
            )}
          </div>
        </div>


      </div>

      <div style={{ height: '25%', width: '80%', alignSelf: 'center' }}>
        <Slider {...settings}>
          {movieData?.map((movie) => (
            <div key={movie.id} style={{ maxHeight: '100px' }}>
              <img src={`${baseUrl}/storage/${movie.picture_url}`} alt={`Image ${movie.id + 1}`} style={{ width: '100%', maxHeight: '100px', maxWidth: '200px' }} />
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};

export default ActorForm;

// const queryClient = new QueryClient();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewMovie(prevState => ({ ...prevState, [name]: value }));
  // };
  // const rehandleChange = (e) => {
  //   const { name, value } = e.target;
  //   resetNewMovie(prevState => ({ ...prevState, [name]: value }));
  // };
  // const [renewMovie, resetNewMovie] = useState({ rename: '', redescription: '' });
 // const HoverDiv = (id) => {
  //   setActiveDivId(activeDivId === id ? null : id);
  // };

   // const handleSelectChange = (e) => {
  //   setSelectedValue(e.target.value);
  // };


  // const addMovie = async (payload) => {
  //   try {
  //     console.log(payload);
  //     const data = await post_call_module(payload, "shows");
  //     console.log(data); // Log the authors data
  //     return data;
  //   } catch (error) {
  //     console.error('Error adding:', error);
  //   }
  // };
  // const handleReSubmit = async (e, tid) => {
  //   e.preventDefault();
  //   if (tid) {
  //     await updateAuthor(tid, renewAuthor);
  //     resetNewAuthor({ rename: '', redescription: '' });
  //     refetch();
  //     setActiveDivId(activeDivId === tid ? null : null);
  //   }


  // };