import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, colorVariants } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { css } from '@nextui-org/react';
import { Uploady } from '@rpldy/uploady';
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import styles from '../styles/addmovie.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UploadDropZone from "@rpldy/upload-drop-zone";

// import '@rpldy/upload-button/style.css';
// import '@rpldy/upload-preview/style.css';

const ActorForm = ({ onAddActor }) => {
  const [newActor, setNewActor] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActor(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActor(newActor);
    setNewActor({ name: '' });

  };



  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
    },
    {
      key: "2",
      name: "Tony Reichert",
      role: "CEO",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    
  ];

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" }
  ];

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

  return (
    <div className={styles.formdiv}>
                <h3 className="text-default-500 text-small">movies</h3>

      <div className="flex flex-row  h-3/5 bg-gray-200 justify-evenly">
      <form onSubmit={handleSubmit} className='flex flex-row w-4/5'>
        <div className="flex flex-col gap-4 w-3/5">

          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color="primary" label="Title" placeholder="Enter movie/series name" defaultValue=" " className="max-w-[220px]" />
              <Select
                label="Type"
                variant='bordered'
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
                className="max-w-xs"
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
              </div>
              </div>

              <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            <DatePicker label="First Release Date" className="max-w-[284px]" color='primary' isRequired />
              <DatePicker label="Next Release Date" className="max-w-[284px]" color='primary' />


             
            </div>
          </div>
                        

          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              

              <Select
                label="Author"
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
                variant='bordered'
                className="max-w-xs"
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
                label="Genre"
                className="max-w-xs"
                variant='bordered'
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
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
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Select
                label="Has Sequel?"
                className="max-w-xs"
                variant='bordered'
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
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
                label="Sequel"
                variant='bordered'
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
                className="max-w-xs"
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
                label="Is Upcoming?"
                className="max-w-xs"
                variant='bordered'
                style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
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

             

            </div>
          </div>

        </div>
        <div className="flex flex-col gap-4 w-2/5 h-full">
        <Uploady destination={{ url: "https://my-server.com/upload" }}>
        <UploadDropZone
					onDragOverClassName="drag-over"
					grouped
					maxGroupSize={3}
          className='h-3/4'
				>
            <span>Drag&Drop File(s) Here</span>
        </UploadDropZone>
        <UploadPreview
            fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"/>
		<UploadButton/>
	</Uploady>
  <button type="submit" className='w-1/4 content-end'>Add</button>
        </div>
      </form>

     
      <div className="w-1/5">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows} style={{ color: '#155e75' }}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

     
          </div>

          <div className="h-2/5">
          <Slider {...settings}>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          <div className={styles.slide}>
            <img src="tv.png" alt="Image" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
          </div>
    </div>
  );
};

export default ActorForm;

