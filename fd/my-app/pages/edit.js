import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/edit.module.css';
import MovieForm from '../components/AddMovie';
import AuthorForm from '../components/AddAuthor';
import GenreForm from '../components/AddGenre';
import ActorForm from '../components/AddActor';
import { Chip } from "@nextui-org/react";


const MyEdits = ({ isOpen, onRequestClose, onSubmit, formData, handleChange }) => {

  const [expandedDiv, setExpandedDiv] = useState(null);

  const toggleDiv = (div) => {
    setExpandedDiv(expandedDiv === div ? null : div); // Toggle the div expansion
    console.log("clicked");
  };
  return (
    <div className={styles.container}>
      <div className={styles.upper} style={{       
          height: expandedDiv === "div" ? "auto" : "23%",
        }}>
        <div style={{
          background: 'url("edit author.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50%',
          backgroundColor: "transparent",
          border: "1px outset #4058b9",
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden",
          height: expandedDiv === "div" ? "auto" : "25%",
          position: 'relative',
        }}
          className="flex rounded-lg   w-2/6 h-full"
          onClick={() => toggleDiv("div")}>


          {expandedDiv === "div" && (
            <div style={{ width: '100%', background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}
              className=" rounded-lg h-full bg-opacity-{25} shadow-2xl shadow-[0px_10px_30px_rgba(196, 181, 253)]"
              onClick={(e) => e.stopPropagation()}>
              <Chip
               size="sm"
               onClose={() => toggleDiv("div")}
               style={{
                position: 'absolute', // This makes the Chip element not affect the layout
                bottom: '0px',          // Adjust the position as needed (e.g., top-right corner)
                left: '0px',
                zIndex: 10
              }} 
              onClick={() => toggleDiv("div")}
                className=' bg-gradient-to-b from-[#5c6db3] to-[#232c31] rounded-lg   text-white text-center  hover:-skew-x-12  '></Chip>
              <AuthorForm />

            </div>
          )}
        </div>
        <div style={{
          background: 'url("edit actor.png")',
          backgroundRepeat: 'no-repeat',
          backgroundColor: "transparent",
          backgroundPosition: '50%',
          border: "1px outset #4058b9",
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden",
          height: expandedDiv === "div" ? "auto" : "25%",
          position: 'relative',
        }}
          className="flex rounded-lg   w-2/6 h-full"
          onClick={() => toggleDiv("div")}>


          {expandedDiv === "div" && (
            <div style={{ width: '100%', background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}
              className=" rounded-lg h-full bg-opacity-{25} shadow-2xl shadow-[0px_10px_30px_rgba(196, 181, 253)]"
              onClick={(e) => e.stopPropagation()}>
              <Chip
               size="sm"
               onClose={() => toggleDiv("div")}
               style={{
                position: 'absolute', // This makes the Chip element not affect the layout
                bottom: '0px',          // Adjust the position as needed (e.g., top-right corner)
                left: '0px',
                zIndex: 10
              }} 
              onClick={() => toggleDiv("div")}
                className=' bg-gradient-to-b from-[#5c6db3] to-[#232c31] rounded-lg   text-white text-center  hover:-skew-x-12  '></Chip>
          <ActorForm />

            </div>
          )}
        </div>
        <div style={{
          background: 'url("edit genre.png")',
          backgroundRepeat: 'no-repeat',
          backgroundColor: "transparent",
          backgroundPosition: '50%',
          border: "1px outset #4058b9",
          cursor: "pointer",
          transition: "all 0.3s ease",
          overflow: "hidden",
          height: expandedDiv === "div" ? "auto" : "25%",
          position: 'relative',
        }}
          className="flex rounded-lg   w-2/6 h-full"
          onClick={() => toggleDiv("div")}>


          {expandedDiv === "div" && (
            <div style={{ width: '100%', background: 'linear-gradient(180deg, #5c6db3 , #232c31, #5c6db3)' }}
              className=" rounded-lg h-full bg-opacity-{25} shadow-2xl shadow-[0px_10px_30px_rgba(196, 181, 253)]"
              onClick={(e) => e.stopPropagation()}>
              <Chip
               size="sm"
               onClose={() => toggleDiv("div")}
               style={{
                position: 'absolute', // This makes the Chip element not affect the layout
                bottom: '0px',          // Adjust the position as needed (e.g., top-right corner)
                left: '0px',
                zIndex: 10
              }} 
              onClick={() => toggleDiv("div")}
                className=' bg-gradient-to-b from-[#5c6db3] to-[#232c31] rounded-lg   text-white text-center  hover:-skew-x-12  '></Chip>
          <GenreForm />

            </div>
          )}
        </div>

      </div>
      <div className={styles.down}>
        <MovieForm /> {/*this has errors on ui */}
      </div>
    </div>

  );
};

export default MyEdits;
