import React, { useState } from 'react';
import {Input} from "@nextui-org/input";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, colorVariants } from "@nextui-org/react";


const AuthorForm = ({ onAddAuthor }) => {
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
    <div className='flex flex-row bg-midnight text-tahiti'>
      <form onSubmit={handleSubmit} className=' w-4/6'>
            <Input
type="text" 
name="name" 
value={newAuthor.name} 
onChange={handleChange} 
required 
          color= "primary"
          label="Author"
          placeholder="Enter author's name"
          defaultValue=" "
          className="max-w-[220px] "
        />
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

export default AuthorForm;
