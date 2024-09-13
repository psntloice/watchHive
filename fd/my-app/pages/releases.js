import React, { useState } from 'react';
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";

const Releases = ({ onAddMovie, genres, authors }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    type: '',
    genre_id: '',
    author_id: '',
    picture_url: '',
    first_release_date: '',
    next_release_date: '',
    sequel_id: '',
    has_sequel: false,
    is_upcoming: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMovie(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      type: '',
      genre_id: '',
      author_id: '',
      picture_url: '',
      first_release_date: '',
      next_release_date: '',
      sequel_id: '',
      has_sequel: false,
      is_upcoming: false
    });
  };
  const images = [
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
    // more images
  ];


  return (

    <div style={{ display: 'flex', gap: '16px' }}>
      {/* First Section - 1/3 width */}
      <div style={{
        flex: '1',
        position: 'relative',
        backgroundImage: `url("https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh', // Adjust the height as needed
        color: '#fff', // Text color for contrast
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '30%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
          }}
        />
        {/* Details Section */}
        <div
          style={{
            position: 'relative',
            padding: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
          }}
        >
          <h2>Image Details</h2>
          <p>Some interesting details about the image go here.</p>
        </div>
      </div>

      {/* Second Section - 2/3 width */}
      <div
        style={{
          flex: '2',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '16px',
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ overflow: 'hidden', borderRadius: '8px' }}>
            <Image
              width={150}
              height={150}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <h1>hjv</h1>
          </div>
        ))}

        <Image
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          style={{ gridColumn: 'span 2' }} // Optional: This makes the image span two columns
        />
      </div>
    </div>
  );
};

export default Releases;
