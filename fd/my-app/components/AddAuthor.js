import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import styles from '../styles/edit.module.css';
// import { useAuthorStore } from "../store/author";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

// const authorStore = useAuthorStore();
const queryClient = new QueryClient()
const AuthorForm = ({ onAddAuthor }) => {
  const movies = [
    { id: 1, title: 'Movie 1', description: 'Details about Movie 1', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 2, title: 'Movie 2', description: 'Details about Movie 2', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 3, title: 'Movie 3', description: 'Details about Movie 3', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 4, title: 'Movie 4', description: 'Details about Movie 4', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 5, title: 'Movie 5', description: 'Details about Movie 5', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 6, title: 'Movie 6', description: 'Details about Movie 6', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },
    { id: 7, title: 'Movie 7', description: 'Details about Movie 7', image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" },

    // Add more movie objects as needed
  ];
  const [newAuthor, setNewAuthor] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAuthor(newAuthor);
    setNewAuthor({ name: '' });
  };
 
  const toggleMovie = (id) => {
    setActiveMovieId(activeMovieId === id ? null : id);
  };
  const [activeMovieId, setActiveMovieId] = useState(null);
  const backendBaseUrl = 'http://127.0.0.1:8000'
  // const { isLoading, isError, data, error } = useQuery(['userData', 123], fetchUserData);
  const addAuthor = async () => {
    // Prevent default form submission if this function is used in a form
  
    try {
      // Make the GET request to the Laravel API
      const response = await  fetch(`${backendBaseUrl}/api/authors`, {
        method: 'GET', // Specify the HTTP method
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${userToken}`,
        },
      });
  
      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok'); // Handle response errors
      }
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      // Alert and log the fetched authors
      alert(JSON.stringify(data)); // Display the authors data
      console.log(data); // Log the authors data
  
      // Assuming you want to do something with the new author
      // For example, if data contains an array of authors, you can access the first one like this:
      if (data.length > 0) {
        const newAuthor = data[0]; // Get the first author as an example
        alert(newAuthor.name); // Alert the author's name
      }
  
      console.log("Increment like count"); // Log this message
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error fetching authors:', error);
    }
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ['authors'],
    queryFn: addAuthor,
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message 
  return (
    <div className='flex flex-row h-full bg-midnight text-tahiti p-2 gap-2'>
      <form 
      // onSubmit={handleSubmit} 
      className=' w-2/5 h-full gap-2 flex flex-col justify-items-center py-4'>
            <Input
type="text" 
name="name" 
value={newAuthor.name} 
onChange={handleChange} 
required 
          color= "primary"
          placeholder="Enter author's name"
          defaultValue=" "
          className="max-w-[220px] h-2/3 max-h-12 justify-center justify-self-center"
        />
        <div className="flex w-full" style={{ alignItems:'center', alignContent: 'center', justifyItems: 'center', justifyContent:'center'}}>
        <button onClick={addAuthor} className="flex justify-self-center max-w-max content-start bg-black" style={{background:'black'}} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 bg-transparent">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

               </button>
               </div>
         </form>

         <div className={styles.author} style={{ alignSelf:'center', overflowY: 'scroll', maxHeight: '89%', background: 'transparent', border: '2px', borderRadius: '15px' }}>
         {/* {movies.map((movie) => (
              <div key={movie.id}  onClick={() => toggleMovie(movie.id)} className='flex justify-center content-end tracking-widest text-sm subpixel-antialiased p-px' style={{ minHeight:'25px', marginBottom: '7px', border: '1px solid #ddd', borderRadius: '8px', background: '#E6F1FE', color: '#006FEE' }}>
                                 <h3>{movie.title}  </h3>
                                 <div
                    style={{
                      borderRadius: '5px',
                      maxHeight: activeMovieId === movie.id ? '50%' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.2s ease',
                      padding: activeMovieId === movie.id ? '1px' : '0',
                      background: 'linear-gradient(to top, #f9f9f9 5%, transparent 70%)',
                    }}
                  >
<button type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{background:'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)'}}>edit</button>
<button type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{background:'#4058b9 '}}>save</button>

             </div>

              </div>
            ))} */}
  {/* {data.map((movie) => (
              <div key={movie.id}  onClick={() => toggleMovie(movie.id)} className='flex justify-center content-end tracking-widest text-sm subpixel-antialiased p-px' style={{ minHeight:'25px', marginBottom: '7px', border: '1px solid #ddd', borderRadius: '8px', background: '#E6F1FE', color: '#006FEE' }}>
                                 <h3>{movie.name}  </h3>
                                 <div
                    style={{
                      borderRadius: '5px',
                      maxHeight: activeMovieId === movie.id ? '50%' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.2s ease',
                      padding: activeMovieId === movie.id ? '1px' : '0',
                      background: 'linear-gradient(to top, #f9f9f9 5%, transparent 70%)',
                    }}
                  >
<button type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{background:'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)'}}>edit</button>
<button type="button" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{background:'#4058b9 '}}>save</button>

             </div>

              </div>
            ))} */}

        </div>
</div>     
  );
};

export default AuthorForm;
