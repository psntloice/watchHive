import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, colorVariants} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/date-picker";
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import { css } from '@nextui-org/react';

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
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
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
    {
      key: "status",
      label: "STATUS",
    },
  ];

  const animals = [
    {key: "cat", label: "Cat"},
    {key: "dog", label: "Dog"},
    {key: "elephant", label: "Elephant"},
    {key: "lion", label: "Lion"},
    {key: "tiger", label: "Tiger"},
    {key: "giraffe", label: "Giraffe"},
    {key: "dolphin", label: "Dolphin"},
    {key: "penguin", label: "Penguin"},
    {key: "zebra", label: "Zebra"},
    {key: "shark", label: "Shark"},
    {key: "whale", label: "Whale"},
    {key: "otter", label: "Otter"},
    {key: "crocodile", label: "Crocodile"}
  ];

 

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
        <h3 className="text-default-500 text-small">movies</h3>

      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Title" placeholder="Enter movie/series name" defaultValue=" " className="max-w-[220px]"/>
        <DatePicker label="First Release Date" className="max-w-[284px]" color='primary' isRequired />  
 <DatePicker label="Next Release Date" className="max-w-[284px]" color='primary' />
        </div>
      </div>  
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        
        <Select 
        label="Select Author" 
        variant='bordered'
        color="primary"
        style={{ color: '#155e75' , background: '#bfdbfe', borderWidth:'200px', borderColor: 'yellow', borderBlockColor: 'yellow'}}

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
        label="Select an animal" 
        style={{ color: '#155e75' , background: '#bfdbfe', borderWidth:'200px', borderColor: 'yellow', borderBlockColor: 'yellow'}}
        variant='bordered'
      >
        {animals.map((animal) => (
          <SelectItem 
          color="success"
          key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <Select 
        label="Select an animal" 
        variant='bordered'
        style={{ color: '#155e75' , background: '#bfdbfe', borderWidth:'200px', borderColor: 'yellow', borderBlockColor: 'yellow'}}
      >
        {animals.map((animal) => (
          <SelectItem 
          color="success"
          key={animal.key}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
                <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Author" placeholder="Enter author's name" defaultValue=" " className="max-w-[220px]"/>
        <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Author" placeholder="Enter author's name" defaultValue=" " className="max-w-[220px]"/>

        </div>
        
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Author" placeholder="Enter author's name" defaultValue=" " className="max-w-[220px]"/>
        <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Author" placeholder="Enter author's name" defaultValue=" " className="max-w-[220px]"/>
        <Input type="text" name="name" value={newActor.name} onChange={handleChange} required color= "primary" label="Author" placeholder="Enter author's name" defaultValue=" " className="max-w-[220px]"/>

        </div>
        
        </div>
    </div>  
    </form>

    <div>
     
        <div>
       
        </div>
        <button type="submit">Add Actor</button>
    </div>
    <div>
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
    </div>
  );
};

export default ActorForm;
