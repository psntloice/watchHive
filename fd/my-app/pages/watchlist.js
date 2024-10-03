
import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@nextui-org/image";
import MoviesDropdown from '@/components/Dropdown';
import { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";

const initialMoviesByMonth = {
  January: ['Movie 1 when you click you can also view movies details on a popup', 'Movie 2'],
  February: ['Movie 3  consider that a movie can have more than one genres', 'Movie 4'],
  June: ['Movie 5', 'Movie 6'],
  // Add more months and movies
};
const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },

];
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




  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
                <DropdownItem key="text">Text</DropdownItem>
                <DropdownItem key="number">Number</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem>
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
              {animals.map((animal) => (
                <SelectItem
                  color="black"
                  style={{ color: '#155e75' }}
                  key={animal.key}>
                  {animal.label}
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
              {animals.map((animal) => (
                <SelectItem
                  color="black"
                  style={{ color: '#155e75' }}
                  key={animal.key}>
                  {animal.label}
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
                <tr class="opacity-70 py-0.5 px-2 tracking-wide hover:ring-2">
                  <td >add when selected its specific background color is different</td>
                  <td >Malcolm Lockyer</td>
                  <td >1961</td>
                  <td >Malcolm Lockyer</td>
                  <td >1961</td>
                </tr>
                <tr class="opacity-70 py-0.5 px-2 tracking-wide hover:ring-2">
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr class="opacity-70 py-0.5 px-2 tracking-wide hover:ring-2">
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>

        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', width: '100%' }}>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'row', width: '100%', padding: '10px' }}>
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
                <p>Details about the movie. Can show if already its in a watchlist and give a chance to move. may show history of when added, when released if watched</p>
              </CardBody>
            </Card>          </div>

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


