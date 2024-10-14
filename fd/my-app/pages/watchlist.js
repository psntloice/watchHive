
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/image";
import MoviesDropdown from '@/components/Dropdown';
import { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const initialMoviesByMonth = {
  January: ['Movie 1 when you click you can also view movies details on a popup', 'Movie 2'],
  February: ['Movie 3  consider that a movie can have more than one genres', 'Movie 4'],
  June: ['Movie 5', 'Movie 6'],
  // Add more months and movies
};

const Watchlist = () => {
  const getPreviousCurrentNextMonth = () => {
    const now = new Date(); // Get the current date
  
    // Create a formatter for the month name
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
  
    // Get the current month index (0-11)
    const currentMonthIndex = now.getMonth();
  
    // Calculate previous and next month indices
    const previousMonthIndex = (currentMonthIndex - 1 + 12) % 12; // Wrap around if necessary
    const nextMonthIndex = (currentMonthIndex + 1) % 12; // Wrap around if necessary
  
    // Get month names using the formatter
    const previousMonth = formatter.format(new Date(now.getFullYear(), previousMonthIndex));
    const currentMonth = formatter.format(now);
    const nextMonth = formatter.format(new Date(now.getFullYear(), nextMonthIndex));
  
    // Return the results
    return {
      previousMonth,
      currentMonth,
      nextMonth
    };
  };
  const months = getPreviousCurrentNextMonth();
console.log(months); 
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [pickedMovie, setPicked] = useState(null);

  // Log the picked movie whenever it changes
  useEffect(() => {
    if (pickedMovie) {
      console.log('Selected Movie:', pickedMovie);
    }
  }, [pickedMovie]);


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
  const getMovie = async () => {
    try {
      const data = await get_call_module("shows")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const {isLoading: isMovieLoading, data: movieData, error: movieError, refetch} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovie,
  })
  console.log(movieData);
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
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1

    infinite: false,
    speed: 500,
    slidesToShow: 3, // Adjust this based on the number of images you want visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    // arrows: true, // Show next/prev arrows
    centerMode: false, // Do not center the active slide
  };
  const [moviesByMonth, setMoviesByMonth] = useState(months);
  const [watchlist, setWatchlist] = useState({});
  const [newMonth, setNewMonth] = useState('');
  const [newMovie, setNewMovie] = useState('');

  const addToWatchlist = (month, movie) => {
    setWatchlist((prevWatchlist) => ({
      ...prevWatchlist,
      [month]: prevWatchlist[month]
        ? [...prevWatchlist[month], movie]
        : [movie],
    }));
  };

  const handleAddToWatchlist = () => {
    if (newMonth.trim() === '' || newMovie.trim() === '') return;

    setMoviesByMonth((prevMovies) => ({
      ...prevMovies,
      [newMonth]: [newMovie],
    }));

    addToWatchlist(newMonth, newMovie); // Optional: Add the movie to the watchlist
    setNewMonth(''); // Clear the month input field
    setNewMovie(''); // Clear the movie input field
  };


  const handleRowClick = (index) => {
    setPicked(index);
    console.log(index);
  };

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  if (isMovieLoading || isAuthorLoading || isActorLoading || isGenreLoading) return 'Loading...'
  if (movieError || authorError || actorError ||  genreError) return 'An error has occurred: ' +  (movieError?.message || authorError?.message || actorError?.message || genreError?.message)
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '6px' }}>

      {/* Input Component */}
      <div style={{ flex: '0 1 12%', marginTop: '32px', display: 'flex', flexDirection: 'row' }}>


        <div style={{ flex: '0 1 70%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: '0 1 15%', display: 'flex', color: "white", gap: '8px', }}>



            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize"
                  style={{ borderRadius: '15px', color: '#E6F1FE' }}
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                style={{ borderRadius: '15px', color: '#155e75' }}
              >
                   {genreData.map((genre) => (
                <DropdownItem  key={genre.id}
                value={genre.id}>
                {genre.name}</DropdownItem>
                   ))}
               
              </DropdownMenu>
            </Dropdown>

            <Select
              placeholder="Actor"
              size="sm"
              radius="full"

              className="w-1/5 h-8"
              variant='bordered'
              style={{ borderRadius: '15px', color: '#155e75' }}
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

            <Select
              placeholder="Author"
              size="sm"
              radius="full"
              className="w-1/5 h-8 font-semibold"
              variant='bordered'
              style={{ borderRadius: '15px', color: 'white' }}
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
            <Input className="h-2 w-1/6" label="name" onClear={() => console.log("input cleared")} />

          </div>

          <div style={{ flex: '1' }} className="p-px ">
            <table class=" max-w-max table-auto border-separate border-spacing-2 " style={{
              padding: '10px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'centre',
              borderRadius: '8px',
              backgroundColor: '#132b4a',
            }}>
              <thead class="opacity-90">
                <tr>
                  <th >Movie</th>
                  <th>Actor</th>
                  <th>Genre</th>
                  <th>Author</th>
                  <th>Inwatchlist</th>
                </tr>
              </thead>
              <tbody>
              {movieData.map((movie) => (
          <tr
            key={movie.id}
            onClick={() => handleRowClick(movie)}
            className="opacity-70 py-0.5 px-2 tracking-wide hover:ring-2"
            style={{ backgroundColor: movie.isSelected ? '#1a4b6f' : 'inherit' }} // Example to change background color if selected
          >
            <td>{movie.title}</td>
            <td>{movie.actors.map(actor => actor.name).join(', ')}</td>
            <td>{movie.genre ? movie.genre.name : 'N/A'}</td>
            <td>{movie.author ? movie.author.name : 'N/A'}</td>
            <td>{movie.inWatchlist ? 'Yes' : 'No'}</td>
          </tr>
        ))}
              </tbody>
            </table>

          </div>

        </div>

        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '100%' }}>
        {pickedMovie && ( <div style={{ flex: '1', display: 'flex', flexDirection: 'row', width: '100%', padding: '10px' }}>
        
            <Card style={{ height: '100%', flex: '0 1 40%', backgroundColor: 'transparent', padding: '10px', justifyContent: 'center' }}>
              <CardBody>
                <Image
                  width={300}
                  alt="Movie Image"
                  src={`${baseUrl}/storage/${pickedMovie.picture_url}`}
                  style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
                />
              </CardBody>
            </Card>
            <Card style={{ height: '100%', flex: '1', justifyContent: 'center', color: 'white', background: 'transparent' }}>
              <CardBody>
              <p> Written By: {pickedMovie.author.name}</p>
                       <p>  Genre: {pickedMovie.genre.name}</p>
                       {/* <p>  Actors: {movie.actor.name}</p> */}
                       <p> First release: {pickedMovie.first_release_date}</p>
                       <p> Next release: {pickedMovie.next_release_date}</p>
                       <p> Sequel: {pickedMovie.next_release_date}</p>
                       <p> Talks of this and that</p>
                       <p> actors: {pickedMovie.next_release_date}</p>              </CardBody>
            </Card>          </div>)}

          <div style={{ flex: '0 1 10%', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <button
              onClick={handleAddToWatchlist}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                background: 'linear-gradient(to top,  transparent 5%, #0e2f53e5 82%)',
                color: '#fff',
                border: '1px solid #ddd',
                width: '75%',
                alignSelf: 'center',
                justifyContent: 'center'
              }}
            >
              Add to watchlist
            </button>
          </div>


        </div>

      </div>

      {/* MovieForm Component */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h1>Watchlist</h1>
        <MoviesDropdown />
      </div>

    </div>



  );
};

export default Watchlist;


