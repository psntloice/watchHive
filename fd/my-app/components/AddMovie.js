import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, colorVariants } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { css } from '@nextui-org/react';
import Uploady from '@rpldy/uploady';
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import styles from '../styles/addmovie.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UploadDropZone from "@rpldy/upload-drop-zone";
import dynamic from 'next/dynamic';
import { Image } from "@nextui-org/image";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const queryClient = new QueryClient();
const ActorForm = () => {
  const [newAuthor, setNewAuthor] = useState({ name: '', description: '' });
  const [renewAuthor, resetNewAuthor] = useState({ rename: '', redescription: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor(prevState => ({ ...prevState, [name]: value }));
  };
  const rehandleChange = (e) => {
    const { name, value } = e.target;
    resetNewAuthor(prevState => ({ ...prevState, [name]: value }));
  };
  const toggleMovie = (id) => {
    setActiveMovieId(activeMovieId === id ? null : id);
  };
  const HoverDiv = (id) => {
    setActiveDivId(activeDivId === id ? null : id);
  };
  const [activeMovieId, setActiveMovieId] = useState(null);
  const [activeDivId, setActiveDivId] = useState(null);
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Details about Movie 1', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 2, title: 'Movie 2', description: 'Details about Movie 2', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 3, title: 'Movie 3', description: 'Details about Movie 3', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 4, title: 'Movie 4', description: 'Details about Movie 4', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 5, title: 'Movie 5', description: 'Details about Movie 5', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 6, title: 'Movie 6', description: 'Details about Movie 6', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 7, title: 'Movie 7', description: 'Details about Movie 7', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
  ];


  const [newActor, setNewActor] = useState({ name: '' });

 
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1

    infinite: false,
    speed: 500,
    slidesToShow: 10, // Adjust this based on the number of images you want visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    // arrows: true, // Show next/prev arrows
    centerMode: false, // Do not center the active slide
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

  const Uploady = dynamic(() => import('@rpldy/uploady'), { ssr: false });
  const UploadDropZone = dynamic(() => import('@rpldy/upload-drop-zone'), { ssr: false });
  const UploadPreview = dynamic(() => import('@rpldy/upload-preview'), { ssr: false });
  const UploadButton = dynamic(() => import('@rpldy/upload-button'), { ssr: false });
  const [selectedValue, setSelectedValue] = useState("true");  // default to string "true"

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

 
  const addAuthor = async (payload) => {
    try {
      const data = await post_call_module(payload,"authors");
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const getMovie = async () => {
    try {
      const data = await get_call_module("shows")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const removeAuthor = async (id) => {
    try {
      const data = await delete_call_module("authors",id);
      refetch();
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting authors:', error);
    }
  };
  const updateAuthor = async (id, payload) => {
    try {
       // Transform the data format
       const author = {
        name: payload.rename,
        description: payload.redescription
      };

      // Use the renamed author object as needed
      console.log(author);
      const data = await put_call_module(author,"authors",id);
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
  const {isLoading: isMovieLoading, data: movieData, error: movieError} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovie,
  })
  const {isLoading: isAuthorLoading, data: authorData, error: authorError} = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthor,
  })
  const {isLoading: isActorLoading, data: actorData, error: actorError} = useQuery({
    queryKey: ['actors'],
    queryFn: getActor,
  })
  const {isLoading: isGenreLoading, data: genreData, error: genreError} = useQuery({
    queryKey: ['genres'],
    queryFn: getGenre,
  })
  const handleSubmit = async (e) => {
    e.preventDefault();

    const booleanValue = selectedValue === "true";

    await addAuthor(newAuthor);
    setNewAuthor({ name: '', description: '' });
    refetch();
    
  };
  const handleReSubmit = async (e, tid) => {
    e.preventDefault();
    if (tid) {
      await updateAuthor(tid,renewAuthor);
      resetNewAuthor({ rename: '', redescription: '' });
    refetch();
    setActiveDivId(activeDivId === tid ? null : null);        }

    
  };
  if (isAuthorLoading || isActorLoading || isGenreLoading) return 'Loading...'
  if ( authorError || actorError ||  genreError) return 'An error has occurred: ' +  (authorError?.message || actorError?.message || genreError?.message)
  return (

    <div className={styles.formdiv}>
      <h3 className="text-default-500 text-small">movies</h3>

      <div style={{ flex: '1', width: '96vw', display: 'flex', gap: '2.5em', flexDirection: 'row' }} >
        <form onSubmit={handleSubmit} style={{ flex: '1', width: '96vw', height: '100%', display: 'flex', columnGap: '1em', flexDirection: 'column' }} className='flex flex-row w-4/5'>

          <div style={{ width: '100%', flex: '1', display: 'flex', gap: '10%', flexDirection: 'row', justifyContent: 'space-around' }} className='flex flex-row w-4/5'>
            <div className="flex flex-col gap-4 w-5/12 ">

              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-evenly">
                  <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color="primary" label="Title" placeholder="Enter movie/series name" defaultValue=" " className="max-w-[220px]" style={{ background: '#E6F1FE' }}
                  />

                  <Select
                    placeholder="Type"
                    variant='bordered'
                    style={{ color: '#155e75', background: '#E6F1FE', borderRadius: '15px' }}
                    className="max-w-52 "
                    value={selectedValue} onChange={handleSelectChange}
                  >
                       <SelectItem color="black"
                        style={{ color: '#155e75' }} value="movie">Movie</SelectItem>
                       <SelectItem color="black"
                        style={{ color: '#155e75' }} value="series">Series</SelectItem>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-evenly">
                  <DatePicker label="First Release Date" className="max-w-[284px] " color='primary' isRequired />
                  <DatePicker label="Next Release Date" className="max-w-[284px]" color='primary' />



                </div>
              </div>


              <div className="flex flex-col gap-2 ">
                <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4 justify-around">


                  <Select
                    placeholder="Author"
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    variant='bordered'
                    className="max-w-52 text-blue-500"
                  >
                    {authorData.map((author) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={author.id}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    placeholder="Genre"
                    className="max-w-52"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                  >
                    {genreData.map((genre) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={genre.id}>
                        {genre.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    placeholder="Actor"
                    className="max-w-52"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                  >
                    {actorData.map((actor) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={actor.key}>
                        {actor.label}
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
                    value={selectedValue} onChange={handleSelectChange}
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                  >
                      <SelectItem  color="black"
                        style={{ color: '#155e75' }} value="true">Yes</SelectItem>
                      <SelectItem  color="black"
                        style={{ color: '#155e75' }} value="false">No</SelectItem>
                    
                  </Select>

                  <Select
                    placeholder="Sequel"
                    variant='bordered'
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                    className="max-w-52"
                  >
                    {/* {movieData.map((movie) => (
                      <SelectItem
                        color="black"
                        style={{ color: '#155e75' }}
                        key={movie.id}>
                        {movie.name}
                      </SelectItem>
                    ))} */}
                  </Select>

                  <Select
                    placeholder="Is Upcoming?"
                    className="max-w-40"
                    variant='bordered'
                    value={selectedValue} onChange={handleSelectChange}
                    style={{ borderRadius: '15px', color: '#155e75', background: '#E6F1FE' }}
                  >
                      <SelectItem  color="black"
                        style={{ color: '#155e75' }} value="true">Yes</SelectItem>
                      <SelectItem  color="black"
                        style={{ color: '#155e75' }} value="false">No</SelectItem>
                   
                  </Select>



                </div>
              </div>

            </div>
            <div className="flex flex-col gap-4 w-2/5 h-full bg-sky-500 border-y-4 border border-blue-700 rounded-3xl">
              <Uploady destination={{ url: "https://my-server.com/upload" }}>
                <UploadDropZone
                  onDragOverClassName="drag-over"
                  grouped
                  maxGroupSize={3}
                  className='h-3/4 content-center bg-transparent color-black text-black rounded-lg text-end text-tahiti'
                >
                  <h2 className='w-full text-center color-black  text-tahiti'
                  >Drag&Drop File(s) Here</h2>
                </UploadDropZone>
                <UploadPreview
                  fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg" />
                <UploadButton className=' w-3/5 self-center rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500' />
              </Uploady>
            </div>
          </div>
          <div style={{ height: '12%', display: 'flex', justifyContent: 'space-around' }}>
            <button type="submit" className='w-1/6 h-full border-y-8 rounded-s-3xl bg-gradient-to-br from-blue-500 to-purple-600 w-1/6 h-2/3 content-end'>
              Add/Save</button>

          </div>
        </form>


        <div style={{ position: 'relative', height: '100%', justifyContent: 'center', color: 'black' }} className="w-1/4">
          <div style={{ overflowY: 'auto', maxHeight: '80vh', padding: '10px', background: 'linear-gradient(to top, #4058b9  5%, #babccf 30%)', height: '43vh', border: '0px', borderRadius: '15px' }}>
            {movies.map((movie) => (
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
                  <h3>{movie.title}</h3>
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
                            src={movie.image}
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
                          <p>{movie.description}</p>
                          <button onClick={(e) => e.stopPropagation()} type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{ background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}>edit</button>

                          {/* Add more details or components here as needed */}
                        </div>

                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <div style={{ height: '25%', width: '80%', alignSelf: 'center' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ maxHeight: '100px' }}>
              <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', maxHeight: '100px', maxWidth: '200px' }} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ActorForm;

