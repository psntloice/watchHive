import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import styles from '../styles/edit.module.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';

const queryClient = new QueryClient();

const ActorForm = () => {
 
  const [newActor, setNewActor] = useState({ name: '', description: ''  });
  const [renewActor, resetNewActor] = useState({ rename: '', redescription: ''  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActor(prevState => ({ ...prevState, [name]: value }));
  };
  const rehandleChange = (e) => {
    const { name, value } = e.target;
    resetNewActor(prevState => ({ ...prevState, [name]: value }));
  };
 const toggleMovie = (id) => {
    setActiveMovieId(activeMovieId === id ? null : id);
  };
  const HoverDiv = (id) => {
    setActiveDivId(activeDivId === id ? null : id);
  };
  const [activeMovieId, setActiveMovieId] = useState(null);
  const [activeDivId, setActiveDivId] = useState(null);

  const addActor = async (payload) => {
    try {
      const data = await post_call_module(payload,"actors");
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };
  const getActor = async () => {
    try {
      const data = await get_call_module("actors")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };
  const removeActor = async (id) => {
    try {
      const data = await delete_call_module("actors",id);
      refetch();
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting actors:', error);
    }
  };
  const updateActor = async (id, payload) => {
    try {
       // Transform the data format
       const actor = {
        name: payload.rename,
        description: payload.redescription
      };

      // Use the renamed author object as needed
      console.log(actor);
      const data = await put_call_module(actor,"actors",id);
    } catch (error) {
      console.error('Error deleting actors:', error);
    }
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['actors'],
    queryFn: getActor,
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addActor(newActor);
    setNewActor({ name: '', description: '' });
    refetch();

  };

  const handleReSubmit = async (e, tid) => {
    e.preventDefault();
    if (tid) {
      await updateActor(tid,renewActor);
      resetNewActor({ rename: '', redescription: '' });
    refetch();
    setActiveDivId(activeDivId === tid ? null : null);        }

    
  };
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='flex flex-row w-full h-full bg-midnight text-tahiti p-2 gap-2'>
      <form
        onSubmit={handleSubmit}
        className=' w-2/5 h-full gap-2 flex flex-col justify-items-center py-4'>
        <Input
          type="text"
          name="name"
          value={newActor.name}
          onChange={handleChange}
          required
          color="primary"
          placeholder="Enter name"
          defaultValue=" "
          className="max-w-[220px] h-2/3 max-h-12 justify-center justify-self-center"
        />
        <Input
          type="text"
          name="description"
          value={newActor.description}
          onChange={handleChange}
          required
          color="primary"
          placeholder="Enter description"
          defaultValue=" "
          className="max-w-[220px] h-2/3 max-h-12 justify-center justify-self-center"
        />
        <div className="flex w-full" style={{ alignItems: 'center', alignContent: 'center', justifyItems: 'center', justifyContent: 'center' }}>
          <button className="flex justify-self-center max-w-max content-start bg-black" style={{ background: 'black' }} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 bg-transparent">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

          </button>
        </div>
      </form>

      <div className={styles.author} style={{ alignSelf: 'center', overflowY: 'scroll', maxHeight: '89%', background: 'transparent', border: '2px', borderRadius: '15px'}}>
        {data.map((movie) => (
          <div key={movie.id}   onMouseEnter={() => HoverDiv(movie.id)}
          
            className='flex flex-col justify-center content-end tracking-widest text-sm subpixel-antialiased p-px' style={{ minHeight: '25px', marginBottom: '7px', border: '1px solid #ddd', borderRadius: '8px', background: '#E6F1FE', color: '#006FEE' }}>
            <div class="flex w-full gap-4" >
               {movie.name}
              <div class="flex w-full gap-4"  style={{
                maxWidth: activeDivId === movie.id ? '70%' : '0',
                overflow: 'hidden',
                transition: 'max-width 0.2s ease',
              }}>
              <button onClick={() => toggleMovie(movie.id)}  type="button" className="flex flex-reverse flex-end text-white font-small rounded-lg text-xs font-thin w-min h-max" style={{ background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                </svg>
              </button>

              <button onClick={() => removeActor(movie.id)} type="button" className="text-white font-small rounded-lg text-xs font-thin w-min h-max" style={{ background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                  <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
                </svg>
              </button>
              </div>
            </div>
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
              <form onSubmit={(e) => handleReSubmit(e, movie.id)}>
              <label className='text-xs tracking-tighter ' style={{
                color: 'darkgray'
              }}>name</label>
              <Input
                type="text"
                name="rename"
                value={renewActor.rename}
                onChange={rehandleChange}
                isRequired
                color="primary"
                placeholder={movie.name}
                                className="max-w-[220px] h-2/3 max-h-12 justify-center justify-self-center shadow-xl "
              />
               <label className='text-xs tracking-tighter' style={{
                color: 'darkgray'
              }}>description</label>
              <Input
                type="text"
                name="redescription"
                value={renewActor.redescription}
                onChange={rehandleChange}
                isRequired
                color="primary"
                placeholder={movie.description}
                className="max-w-[220px] h-2/3 max-h-12 justify-center justify-self-center shadow-xl"
              />
              <button type="submit" class="text-white font-small rounded-lg text-xs font-thin w-max h-max" style={{ background: '#4058b9 ' }}>save</button>
              </form>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ActorForm;
