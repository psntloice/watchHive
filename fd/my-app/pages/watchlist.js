
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
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';



const Watchlist = () => {
  const selectMonth = () => {
   
  };
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
  const getWatchlist = async () => {
    try {
      const data = await get_call_module("watchlists")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const addToWatchlist = async (payload) => {
    try {
      const data = await post_call_module(payload,"watchlists");
      MoviesDropdown.refetchWatchlist();
            console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error adding:', error);
    }
  };
  const {isLoading: isWatchLoading, data: watchlistData, error:watchlistError} = useQuery({
    queryKey: ['watchList'],
    queryFn: getWatchlist,
  });
  const {isLoading: isMovieLoading, data: movieData, error: movieError} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovie,
  });
  console.log(movieData);
  const {isLoading: isAuthorLoading, data: authorData, error: authorError} = useQuery({
    queryKey: ['authors'],
    queryFn: getAuthor,
  });
  const {isLoading: isActorLoading, data: actorData, error: actorError} = useQuery({
    queryKey: ['actors'],
    queryFn: getActor,
  });
  const {isLoading: isGenreLoading, data: genreData, error: genreError} = useQuery({
    queryKey: ['genres'],
    queryFn: getGenre,
  });
 
  const [watchlist, setWatchlist] = useState({});
  const [newMonth, setNewMonth] = useState('');
  const [newMovie, setNewMovie] = useState('');

  // const addToWatchlist = (month, movie) => {
  //   setWatchlist((prevWatchlist) => ({
  //     ...prevWatchlist,
  //     [month]: prevWatchlist[month]
  //       ? [...prevWatchlist[month], movie]
  //       : [movie],
  //   }));
  // };

  const handleAddToWatchlist = (movieId) => {
    console.log("woo");
    const payload = {
      user_id: 1,
      show_id: movieId,
      month:selectedMonth,
      year:new Date().getFullYear()
    };
    addToWatchlist(payload);
    // console.log(newMonth);
    // if (newMonth.trim() === '' || newMovie.trim() === '') return;

    // setMoviesByMonth((prevMovies) => ({
    //   ...prevMovies,
    //   [newMonth]: [newMovie],
    // }));

    // addToWatchlist(newMonth, newMovie); // Optional: Add the movie to the watchlist
    // setNewMonth(''); // Clear the month input field
    // setNewMovie(''); // Clear the movie input field
    // console.log(watchlist);
  };
  const handlePic = () => {

  console.log("index");
};

  const handleRowClick = (index) => {

      setPicked(index);
    console.log(index);
  };
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
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
    return [previousMonth, currentMonth, nextMonth];
  };
  const moviesByMonth = getPreviousCurrentNextMonth();
  const [selectedMonth, setSelectedMonth] = useState(null);
  // const getFavourites = async () => {
  //   try {
  //     const data = await get_call_module("favourites")
  //     console.log(data); // Log the authors data
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching authors:', error);
  //   }
  // };
  // const {isLoading: isFavLoading, data: favData, error: favError} = useQuery({
  //   queryKey: ['favs'],
  //   queryFn: getFavourites,
  // })
  const addToFavourites = async (payload) => {
    try {
      const data = await post_call_module(payload,"favourites");
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error adding:', error);
    }
  }
  const [isActive, setIsActive] = useState(false);
  const handleFavourites = (id) => {
    console.log(id);
    const payload = {
      user_id: 1,
      show_id: id,
    };
    addToFavourites(payload);
    setIsActive((prev) => !prev);

  };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (isMovieLoading || isAuthorLoading || isActorLoading || isGenreLoading) return 'Loading...'
  if (movieError || authorError || actorError ||  genreError) return 'An error has occurred: ' +  (movieError?.message || authorError?.message || actorError?.message || genreError?.message)
    const filteredMovies = movieData.filter((movie) => {
      // Convert movie.genre to a string if it's an array
      const movieGenre = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre;
    
      // Ensure movieGenre is a string before calling toLowerCase
      const genreString = typeof movieGenre === 'string' ? movieGenre.toLowerCase() : '';
      // Check if name, genre, or any actor matches the search query
      return (
        // console.log(movieGenre)
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.author.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        // ||
        // movie.genre.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        // genreString.includes(searchQuery.toLowerCase()) 
        // ||
        // movie.actors.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    console.log(movieData.map((m) => m.id === selectedValue.sequel_id).title);
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
            <Input className="h-2 w-1/6" value={searchQuery}
            onChange={handleSearchChange} label="name" onClear={() => console.log("input cleared")} />

          </div>
          {filteredMovies.length > 0 ? (
      
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
            {filteredMovies.map((movie) => (
        <tr
          key={movie.id}
          onClick={() => handleRowClick(movie)}
          className="opacity-70 py-0.5 px-2 tracking-wide hover:ring-2"
          style={{ backgroundColor: movie.isSelected ? '#1a4b6f' : 'inherit' }} // Example to change background color if selected
        >
          <td>{movie.title}</td>
          <td>{movie?.actors?.map((actor) => actor.name).join(", ")}</td>
          <td>{movie?.genres?.map((genre) => genre.name).join(", ")}</td>
          <td>{movie.author ? movie.author.name : 'N/A'}</td>
          <td>{movie.inWatchlist ? 'Yes' : 'No'}</td>

        </tr>
      ))}
            </tbody>
          </table>

        </div>
      ) : (
        <p>No movies found</p>
      )}
          {/* <div style={{ flex: '1' }} className="p-px ">
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
            <td>{movie.actors.map(actor => actor.name).join(', ')  || 'N/A'}</td>
            <td>{movie.genre ? movie.genre.name : 'N/A'}</td>
            <td>{movie.author ? movie.author.name : 'N/A'}</td>
            <td>{movie.inWatchlist ? 'Yes' : 'No'}</td>

          </tr>
        ))}
              </tbody>
            </table>

          </div> */}

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
              <div  style={{ width:'100%', textAlign:'center', fontStyle: 'italic'}}>{pickedMovie.type}</div>
              <p> Written By: {pickedMovie.author.name}</p>
                       <p>  Genre: {pickedMovie?.genres?.map((genre) => genre.name).join(", ")}</p>
                       {/* <p>  Actors: {movie.actor.name}</p> */}
                       <p> First release: {pickedMovie.first_release_date}</p>
                       <p> Next release: {pickedMovie.next_release_date}</p>
                       <p> Sequel: {pickedMovie.next_release_date}</p>
                       <p> Talks of this and that</p>
                       <p> actors: {pickedMovie.next_release_date}</p>   
                       <button className="flex justify-self-center max-w-max content-start bg-black" style={{ background: 'black' }} onClick={() => handleFavourites(pickedMovie.id)}>     
                       <svg xmlns="http://www.w3.org/2000/svg" fill= {isActive ? 'red' : 'black'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>  add to favourites
</button>
      </CardBody>
            </Card>          </div>)}

          <div style={{ flex: '0 1 10%', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <button
            onClick={onOpen}
              // onClick={handleAddToWatchlist}
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
            {pickedMovie && (
               <Modal 
             size='xs'
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        placement='center'
        style={{width:'20%',background:'transparent', color:'white'}}
      >
        <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Select Month</ModalHeader>
              <ModalBody>
              {moviesByMonth.map((month) => (
              <Button style={{background:selectedMonth === month ? 'teal' : 'white', color: 'black'}} color="danger" variant="light"  value="1" label="b" onPress={() => setSelectedMonth(selectedMonth === month ? null : month)}> {month}</Button>
              ))}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onClick={() => handleAddToWatchlist(pickedMovie.id)}>
                  Add
                </Button>
              
              </ModalFooter>
          {/* {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Select Month</ModalHeader>
              <ModalBody>
              {moviesByMonth.map((month) => (
              <Button style={{background:selectedMonth === month ? 'teal' : 'white', color: 'black'}} color="danger" variant="light"  value="1" label="b" onPress={() => setSelectedMonth(selectedMonth === month ? null : month)}> {month}</Button>
              ))}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onClick={() => handleAddToWatchlist}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )} */}
        </ModalContent>
      </Modal>
      )}
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


