import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const Releases = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const getReleases = async () => {
    try {
      const data = await get_call_module("releases")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching releases:', error);
    }
  };
  const {isLoading: isReleaseLoading, data: releaseData, error: releaseError} = useQuery({
    queryKey: ['releases'],
    queryFn: getReleases,
  });
  // const lastAddedMovie = releaseData && releaseData.length > 0 ? releaseData[releaseData.length - 1] : null;
  const [selectedMovie, setSelectedMovie] = useState(null);
    // Fetch the last added movie based on releaseData
    useEffect(() => {
      if (releaseData && releaseData.length > 0) {
          const lastAddedMovie = releaseData[releaseData.length - 1];
          setSelectedMovie(lastAddedMovie);
      } else {
          setSelectedMovie(null); // Reset state if no movie is found
      }
  }, [releaseData]);
  // selectedMovie?'':setSelectedMovie(lastAddedMovie);
  const [isActive, setIsActive] = useState(false);
  if (isReleaseLoading) return 'Loading...'

  console.log(releaseData);
  console.log(selectedMovie);
  if (releaseError) return 'An error has occurred: ' +  (releaseError?.message)

  return (

    <div style={{ display: 'flex', gap: '16px' }}>
      {/* First Section - 1/3 width */}
      <div style={{
        flex: '1',
        position: 'relative',
        backgroundImage: selectedMovie ?  `url(${baseUrl}/storage/${selectedMovie.picture_url})`: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh', // Adjust the height as needed
        color: '#fff', // Text color for contrast
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '30%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
          }}
        />
        {/* Details Section */}
        {selectedMovie && (
        <div
          style={{
            position: 'relative',
            padding: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
          }}
        >
             <p> Written By: {selectedMovie.author.name}</p>
                       <p>  Genre: {selectedMovie?.genres?.map((genre) => genre.name).join(", ")}</p>
                       <p> First release: {selectedMovie.first_release_date}</p>
                       <p> Next release: {selectedMovie.next_release_date}</p>
                       <p> Sequel: {selectedMovie.next_release_date}</p>

                       <p> Talks of this and that</p>

                       very detailed explanation
                       <p>  Actors: {selectedMovie?.actors?.map((actor) => actor.name).join(", ")}</p>

                           
                       <button className="flex justify-self-center max-w-max content-start bg-transparent" style={{ background: 'transparent' }} onClick={() => (isActive ? handleFavourites(selectedMovie.id): removeFromFavourites(selectedMovie.id))}
                      //  onClick={() => handleFavourites(pickedMovie.id)}
                       >     
                       <svg xmlns="http://www.w3.org/2000/svg" fill= {isActive ? 'red' : 'black'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="blue" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg> add to favorites
</button>     </div> )}
        </div>

      {/* Second Section - 2/3 width */}
      <div
        style={{
          flex: '2',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '16px',
        }}
      >
        {releaseData.map((movie) => (
          <div key={movie.id} style={{ overflow: 'hidden', borderRadius: '8px' }}>
            <Image
              width={150}
              height={150}
              src={`${baseUrl}/storage/${movie.picture_url}`}
              // alt={`Image ${index + 1}`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <h1>hjv</h1>
          </div>
        ))}

        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
        />
      </div>
    </div>
  );
};

export default Releases;
