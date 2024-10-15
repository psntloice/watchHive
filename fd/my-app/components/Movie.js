import React, { useState } from 'react';
import {Image} from "@nextui-org/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';


const MovieForm = ({ onAddMovie, searchQuery}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const getMovie = async () => {
    try {
      const data = await get_call_module("shows")
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const {isLoading: isMovieLoading, data: movieData, error: movieError, refetch} = useQuery({
    queryKey: ['movies'],
    queryFn: getMovie,
  })
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  const [modalData, setModalData] = useState(null);
  const handleMOdal = (details) => {
    // onOpen
    console.log(open); // Log when the modal is opened
    console.log(details);
    onOpenChange(open);
    // Update the modal state
    if (details) {
      setModalData(details);

      console.log('Modal is now open'); // Log when the modal is opened
    }  };
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
  if (isMovieLoading) return 'Loading...'
  if ( movieError) return 'An error has occurred: ' +  (movieError?.message)
     // Filter movies based on search query
//  const filteredMovies = movieData.filter((movie) =>{ 
//    const movieGenre = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre; // Convert to string if it's an array 
//  return( movie.genre.toLowerCase().includes(searchQuery.toLowerCase()));
// //  .toLowerCase().includes(searchQuery.toLowerCase()) 
// //  ||
//   // movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   // movie.actors.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())
//   // )
// });
  
const filteredMovies = movieData.filter((movie) => {
  // Convert movie.genre to a string if it's an array
  const movieGenre = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre;

  // Ensure movieGenre is a string before calling toLowerCase
  const genreString = typeof movieGenre === 'string' ? movieGenre.toLowerCase() : '';
  // Check if name, genre, or any actor matches the search query
  return (
    // console.log(movieGenre)
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    // genreString.includes(searchQuery.toLowerCase()) 
    // ||
    // movie.actors.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()))
  );
});
 

  return (
  
    <div>
    <div  style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '16px',
    }}>
        {/* {movieData.map((movie) => (
            <div key={movie.id} style={{ overflow: 'hidden', borderRadius: '8px' }}>
              <Image
                width={150}
                height={150}
                src={`${baseUrl}/storage/${movie.picture_url}`}
                alt={`Image ${movie.id + 1}`}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))} */}
      {/* Render the filtered movie list */}
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id} style={{ overflow: 'hidden', borderRadius: '8px' }}>
                        <Image
                         onClick={() =>handleMOdal(movie)}
                width={150}
                height={150}
                src={`${baseUrl}/storage/${movie.picture_url}`}
                alt={`Image ${movie.id + 1}`}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
             <Modal 
             size='xs'
        isOpen={isOpen} 
        onOpenChange={handleMOdal} 
        placement='center'
        style={{width:'20%',background:'white', color:'black', zIndex: 1000, }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
     {modalData?.title}
     <p> Written By: {modalData?.author.name}</p>
                       <p>  Genre: {modalData?.genre.name}</p>
                       {/* <p>  Actors: {modalData?.actor.name}</p> */}
                       <p> First release: {modalData?.first_release_date}</p>
                       <p> Next release: {modalData?.next_release_date}</p>
                       <p> Sequel: {modalData?.next_release_date}</p>
                       <p> Talks of this and that</p>
                       <p> actors: {modalData?.next_release_date}</p>
                         </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" variant="light" onPress={() => handleAddToWatchlist}>
                  Add
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
     {/* <Image
    width={300}
    alt="NextUI hero Image"
    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
  /> */}
    </div>
    
      

    </div>
  );
};

export default MovieForm;
