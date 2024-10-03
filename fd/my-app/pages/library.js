import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/edit.module.css';
import MovieForm from '../components/Movie';
import {Input} from "@nextui-org/input";


const Library = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '6px' }}>
        {/* Input Component */}
        <div style={{ flex: '0 1 8%' }}>
          <Input type="email" label="by name/author/genre/actor" style={{ width: '100%' }} onClear={() => console.log("input cleared")}/>
        </div>
      
        {/* MovieForm Component */}
        <div style={{ flex: '1' }}>
          <MovieForm className="w-full bg-white" />
        </div>
      </div>
    );

};
export default Library;