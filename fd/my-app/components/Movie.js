import React, { useState } from 'react';
import {Image} from "@nextui-org/image";

const MovieForm = ({ onAddMovie, genres, authors }) => {
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
    // <div>
    //   <h2>Add Movie</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>
    //         Title:
    //         <input 
    //           type="text" 
    //           name="title" 
    //           value={newMovie.title} 
    //           onChange={handleChange} 
    //           required 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Type:
    //         <input 
    //           type="text" 
    //           name="type" 
    //           value={newMovie.type} 
    //           onChange={handleChange} 
    //           required 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Genre:
    //         {/* <select 
    //           name="genre_id" 
    //           value={newMovie.genre_id} 
    //           onChange={handleChange} 
    //           required
    //         >
    //           <option value="">Select Genre</option>
    //           {genres.map(genre => (
    //             <option key={genre.id} value={genre.id}>
    //               {genre.name}
    //             </option>
    //           ))}
    //         </select> */}
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Author:
    //         {/* <select 
    //           name="author_id" 
    //           value={newMovie.author_id} 
    //           onChange={handleChange} 
    //           required
    //         >
    //           <option value="">Select Author</option>
    //           {authors.map(author => (
    //             <option key={author.id} value={author.id}>
    //               {author.name}
    //             </option>
    //           ))}
    //         </select> */}
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Picture URL:
    //         <input 
    //           type="text" 
    //           name="picture_url" 
    //           value={newMovie.picture_url} 
    //           onChange={handleChange} 
    //           required 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         First Release Date:
    //         <input 
    //           type="date" 
    //           name="first_release_date" 
    //           value={newMovie.first_release_date} 
    //           onChange={handleChange} 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Next Release Date:
    //         <input 
    //           type="date" 
    //           name="next_release_date" 
    //           value={newMovie.next_release_date} 
    //           onChange={handleChange} 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Sequel ID:
    //         <input 
    //           type="number" 
    //           name="sequel_id" 
    //           value={newMovie.sequel_id} 
    //           onChange={handleChange} 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Has Sequel:
    //         <input 
    //           type="checkbox" 
    //           name="has_sequel" 
    //           checked={newMovie.has_sequel} 
    //           onChange={handleChange} 
    //         />
    //       </label>
    //     </div>
    //     <div>
    //       <label>
    //         Is Upcoming:
    //         <input 
    //           type="checkbox" 
    //           name="is_upcoming" 
    //           checked={newMovie.is_upcoming} 
    //           onChange={handleChange} 
    //         />
    //       </label>
    //     </div>
    //     <button type="submit">Add Movie</button>
    //   </form>
    // </div>
    <div>
    <div  style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '16px',
    }}>
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

export default MovieForm;
