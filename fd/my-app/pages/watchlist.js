
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/image";
import MoviesDropdown from '@/components/Dropdown';
import { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";


const initialMoviesByMonth = {
  January: ['Movie 1', 'Movie 2'],
  February: ['Movie 3', 'Movie 4'],
  June: ['Movie 5', 'Movie 6'],
  // Add more months and movies
};
const Watchlist = () => {
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

  const [moviesByMonth, setMoviesByMonth] = useState(initialMoviesByMonth);
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

  const handleAddNewMonth = () => {
    if (newMonth.trim() === '' || newMovie.trim() === '') return;

    setMoviesByMonth((prevMovies) => ({
      ...prevMovies,
      [newMonth]: [newMovie],
    }));

    addToWatchlist(newMonth, newMovie); // Optional: Add the movie to the watchlist
    setNewMonth(''); // Clear the month input field
    setNewMovie(''); // Clear the movie input field
  };

  const [selected, setSelected] = React.useState("london");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '6px' }}>

      {/* Input Component */}
      <div style={{ flex: '0 1 12%' }}>

        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'row' }}>

          <div style={{ flex: '0 1 70%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: '0 1 15%', color: "white" }}>
              {/* <RadioGroup
        label="Select month"
        value={selected}
        style={{ color: 'yellow', justifyContent:'space-between'}}
        onValueChange={setSelected}
         orientation="horizontal"
      >
        <Radio value="buenos-aires" className='text-white'><span className='text-white'>month1</span></Radio>
        <Radio value="sydney"  style={{ color: 'yellow'}}>Sydney</Radio>
        
      </RadioGroup> */}
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="option" value="option1" className="mr-2" />
                  Option 1
                </label>

                <label className="flex items-center">
                  <input type="radio" name="option" value="option2" className="mr-2" />
                  Option 2
                </label>

                <label className="flex items-center">
                  <input type="radio" name="option" value="option3" className="mr-2" />
                  Option 3
                </label>
              </div>
            </div>
            {/* <p className="text-default-500 text-small">{selected}</p>
        choose movie */}
            <div style={{ flex: '1' }}>
              <Table  style={{
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              backgroundColor: '#0e2f53e5 ',
              border: '1px solid #ddd',
            }} aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

            </div>
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'row', width: '100%', rowGap: '50px', padding: '10px' }}>
              <Card style={{ height: '100%', flex: '0 1 40%', backgroundColor: 'transparent', padding: '10px', justifyContent: 'center' }}>
                <CardBody>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://images.pexels.com/photos/28435066/pexels-photo-28435066/free-photo-of-ancient-lycian-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
                  />
                </CardBody>
              </Card>
              <Card style={{ height: '100%', flex: '1', justifyContent: 'center', color: 'white', background: 'transparent' }}>
                <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
              </Card>          </div>
            <div style={{ flex: '0 1 10%', display: 'flex', flexDirection: 'column', width: '100%', rowGap: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
              <button
                onClick={handleAddNewMonth}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  background: 'linear-gradient(to top,  transparent 5%, #0e2f53e5 82%)',
                  color: '#fff',
                  border: '1px solid #ddd',
                  position: 'sticky',
                  width: '75%',
                  alignSelf: 'center',
                  justifyContent: 'center'
                }}
              >
                Add to watchlist
              </button>
            </div>
            {/* <div className="flex flex-col justify-between">
              <div className="flex items-center justify-center ">
                  </div>

              
              </div> */}

          </div>
        </div>

      </div>

      {/* MovieForm Component */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h1>Watchlist</h1>

        <MoviesDropdown />
        {Object.keys(watchlist).map((month) => (
          <div key={month} style={{ marginBottom: '16px' }}>
            <h3>{month}</h3>
            <h1>h</h1>
            <ul>
              {watchlist[month].map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>



  );
};

export default Watchlist;


