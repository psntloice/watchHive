import { useState } from 'react';

const moviesByMonth = {
  January: ['Movie 1 when you click you can also view movies details on a popup', 'Movie 2'],
  February: ['Movie 3 i dont understand the diff btn this and the other constant in watchlist initial movies by month', 'Movie 4'],
  June: ['Movie 5 Movie 3  consider that a movie can have more than one genres', 'Movie 6'],
  // Add more months and movies
};

export default function MoviesDropdown() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const toggleDropdown = (month) => {
    setSelectedMonth(selectedMonth === month ? null : month);
  };

  return (
    <div>
      {Object.keys(moviesByMonth).map((month) => (
        <div key={month} style={{ marginBottom: '16px' }}>
          <button
            onClick={() => toggleDropdown(month)}
            style={{
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left',
              backgroundColor: '#0e2f53e5 ',
              border: '1px solid #ddd',
            }}
          >
            {month}
          </button>
          {selectedMonth === month && (
            <div
              style={{
                display:'flex',
                flexDirection:'column',
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >

              {moviesByMonth[month].map((movie, index) => (
                <p key={index} style={{
               display: 'flex',
               flexDirection:'row',
               width:'100%',
                }}>{movie} 
                <span style={{
               display: 'flex',
               flexDirection: 'row-reverse',
               width:'80%',
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z" />
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
              </span>
              </p>

                
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
