import React, { useState } from 'react';
import {Image} from "@nextui-org/image";
import {Input} from "@nextui-org/input";
import {Switch} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const Favourites = () => {
 
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
 
  const getFavourites = async () => {
    try {
      const data = await get_call_module("favourites")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const {isLoading: isFavLoading, data: favData, error: favError} = useQuery({
    queryKey: ['favs'],
    queryFn: getFavourites,
  });
  if (isFavLoading) return 'Loading...'
  if (favError) return 'An error has occurred: ' +  (favError?.message)
console.log(favData);
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
        
        {favData.length > 0 ? (
        favData.map((movie) => (
          <div key={movie.id} style={{ overflow: 'hidden', borderRadius: '8px' }}>
            <Image
            onClick={() =>handleMOdal(movie)}
              width={150}
              height={150}
              src={`${baseUrl}/storage/${movie.show.picture_url}`}
              // alt={`Image ${movie.id + 1}`}
              className='z-0'
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
         
     
     {/* <Image
    width={300}
    alt="NextUI hero Image"
    src="https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
  /> */}
    </div>
    <Modal 
             size='xs'
        isOpen={isOpen} 
        onOpenChange={handleMOdal} 
        placement='center'
        className='z-40'
        style={{width:'20%',background:'white', color:'black', zIndex: 1000, }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
     {modalData?.show.title}
     <p> Written By: {modalData?.show.author.name}</p>
                       <p>  Genre: {modalData?.show.genres.name}</p>
                       <p> First release: {modalData?.show.first_release_date}</p>
                       <p> Next release: {modalData?.show.next_release_date}</p>
                       <p> Sequel: {
   modalData?.show.sequel_id 
          ? movieData.find(m => m.id === modalData?.show.sequel_id)
            ? `${movieData.find(m => m.id === modalData?.show.sequel_id).title}`
            : "No sequel found"
          : "No sequel"
  } {modalData?.next_release_date}</p>
                       <p> {modalData?.show.description}</p>
                       <p>  Actors: {modalData?.show.actors?.map((actor) => actor.name).join(", ")}</p>
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
    </div>
  );
};

export default Favourites;
