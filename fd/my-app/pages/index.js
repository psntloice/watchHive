// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">pages/index.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

// pages/index.js
// import Layout from '../components/layout'

// const HomePage = () => (
//   console.log('Rendering IndexPage');
//     <div>
//       <h1>My Movie Watchlist</h1>
//       {/* Display list of movies or watchlist items */}
//     </div>
// );

// export default HomePage;


// pages/index.js (example)

// const IndexPage = () => {
  
//   return (
//          <div>
//       <h1>My Movie Watchlist</h1>
//       {/* Display list of movies or watchlist items */}
//     </div>
//   );
// };

// export default IndexPage;


// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Image} from "@nextui-org/image";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const Home = () => {
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
  const removeFromFavourites = async (id) => {
    try {
      const data = await delete_call_module("favourites",id);
      setIsActive((prev) => !prev);

      // refetch();
      console.log(id); // Log the authors data

      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting authors:', error);
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
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
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
  const lastAddedMovie = movieData && movieData.length > 0 ? movieData[movieData.length - 1] : null;
  const [selectedMovie, setSelectedMovie] = useState(lastAddedMovie);

  const handleAddToWatchlist = (themovie, movie) => {
    setSelectedMovie(movie);

    if (1 !== themovie) { // Update state only if a different movie is clicked
      setSelectedMovie(movie);
    }        console.log("hurraaay");
  };
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

  // useEffect(() => {
  //   // if (favData.length = 0) return ;
  //   // if (selectedMovie.length = 0) return;
  //   // Check if the selectedMovie is in favData
  //   if (favData.some((fav) => fav.show_id === selectedMovie.id)) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }, [favData, selectedMovie]);

  if (isMovieLoading) return 'Loading...';
  console.log(movieData);
  if ( movieError) return 'An error has occurred: ' +  (movieError?.message);
    selectedMovie?'':setSelectedMovie(lastAddedMovie);
  return (
    <div style={{ display: 'flex', flexDirection:'column', gap: '16px', minHeight:'95vh' }}>
  <Head>
    <title>Movie Watchlist</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  
  {/* Large Background Image Section */}
  <div style={{
    flex: '2',
    position: 'relative', // Relative to position the slider correctly
    background: selectedMovie ?  `url(${baseUrl}/storage/${selectedMovie.picture_url})`: 'none',
    backgroundRepeat: 'no-repeat',
    height: '95vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'right',
  }}>
     {/* Small Background Image Section */}
    <div className={styles.divimage}>
      {/* Content and Overlay */}
      <div style={{
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '90%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
      }}>
        {selectedMovie && (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '80%',
          textAlign: 'center',
        }}>
          
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
      
    </div>
    
    {/* Slider Positioned on Top */}
    <div style={{
      position: 'absolute',
      bottom: '0', // Adjust the position as needed
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%', // Adjust width as needed
      zIndex: 2, // Ensure it appears above other content
    }}>
      <Slider {...settings}>
        {movieData.map((movie)=> (
          <div key={movie.id} style={{ maxHeight: '187px' }}>
            <img src={`${baseUrl}/storage/${movie.picture_url}`} alt={`Image ${movie.id + 1}`} style={{ width: '100%', maxHeight: '287px', maxWidth: '587px' }}
            onClick={() => handleAddToWatchlist(movie.id, movie)}  />
          </div>
        ))}
      </Slider>
    </div> 
  </div>
</div>


  );
};

export default Home;

  {/* <div className={styles.image_container}>
      <Image
layout="fill"
width={"80vw"}
objectFit="cover"
      alt="NextUI hero Image"
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    />
      </div> */}