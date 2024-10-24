import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { get_call_module, post_call_module, put_call_module, delete_call_module } from '../utils/module_call';




export default function MoviesDropdown() {

    //states
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedMonth, setSelectedMonth] = useState(null);

   //calls to api
  const getUser = async () => {
    try {
      const data = await get_call_module("users")
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };
  const removeFromWatchlist = async (id) => {
    try {
      const data = await delete_call_module("watchlists", id);
      // refetch();
      console.log(data); // Log the authors data
      return data;
    } catch (error) {
      console.error('Error deleting :', error);
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
  const { isLoading: isUserLoading, data: userData, error: userError } = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
  });
  const {isLoading: isWatchLoading, data: watchlistData, error:watchlistError, refetch} = useQuery({
    queryKey: ['watchList'],
    queryFn: getWatchlist,
  });

  //fuctions
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
    return [previousMonth, currentMonth, nextMonth];
  };
  const toggleDropdown = (month) => {
    setSelectedMonth(selectedMonth === month ? null : month);
  };

    //useeffects
    const moviesByMonth = getPreviousCurrentNextMonth();

  return (
    <div>
       {moviesByMonth.map((month, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <button
            onClick={() => toggleDropdown(month)}
            style={{
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              backgroundColor: '#0e2f53e5',
              border: '1px solid #ddd',
            }}
          >
            {month}
          </button>
          {selectedMonth === month && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
                            { watchlistData?.map((watch) => (

            //{/* { watchlistData[month]?.map((movie, movieIndex) => ( */}
                <p key={watch.id} style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                  {selectedMonth.toLowerCase() === watch.month.toLowerCase() && (
                  <span style={{
                    display: 'flex',
                    width: '60%',
                  }}>
                    {watch.show.title}
                    {watch && (
              <Modal
                size='2xl'
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement='center'
                style={{ width: '60%', background: 'transparent', color: 'white' }}
              >
                {userData ? (
                  <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Select Month</ModalHeader>
                    <ModalBody>

                      Select the month you want to watch {watch.show.title} in
                      {moviesByMonth.map((month) => (
                        <Button style={{ background: selectedMonth === month ? 'teal' : 'white', color: 'black' }} color="danger" variant="light" value="1" label="b" onPress={() => setSelectedMonth(selectedMonth === month ? null : month)}> {month}</Button>
                      ))}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" variant="light" onClick={() => handleAddToWatchlist(pickedMovie.id)}>
                        Edit and save the movies' previous watchlist history
                      </Button>
                      <Button color="primary" variant="light" onClick={() => handleAddToWatchlist(pickedMovie.id)}>
                        Edit and delete the movies' previous watchlist history
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
                ) : (
                  <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Select Month</ModalHeader>
                    <ModalBody>
                      <h2>Please sign in</h2>

                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" variant="light" >
                        Sign in
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

                )}

              </Modal>
            )}
                    <button className="flex justify-self-center max-w-max content-start bg-transparent" style={{ background: 'transparent' }}  onClick={onOpen}>
               
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
</svg>
</button>
<button className="flex justify-self-center max-w-max content-start bg-transparent" style={{ background: 'transparent' }} onClick={() => removeFromWatchlist(watch.id)}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              </button>
                  </span>
                 
)}


                </p>

                
              ))}


            </div>
          )}
        </div>
      ))}
    </div>
  );
}
