import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, colorVariants } from "@nextui-org/react";


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

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
   
    
  ];
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

  return (
    <div className='flex flex-row '>
     <form onSubmit={handleSubmit} className=' w-4/6'>
           
        <Input
type="text" 
name="name" 
value={newActor.name} 
onChange={handleChange} 
required 
          color= "primary"
          label="Author"
          placeholder="Enter author's name"
          defaultValue=" "
          className="max-w-[220px]"
        />
        <button type="submit" variant="bordered" style={{ color: '#155e75', background: '#bfdbfe', borderWidth: '200px', borderColor: 'yellow', borderBlockColor: 'yellow' }}
        >Add Actor</button>
        </form>
                <div className=' w-2/6'>

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
  );
};

export default ActorForm;
