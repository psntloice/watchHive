import { useState } from 'react';

const moviesByMonth = {
  January: ['Movie 1', 'Movie 2'],
  February: ['Movie 3', 'Movie 4'],
  June: ['Movie 5', 'Movie 6'],
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
              backgroundColor: 'GrayText ',
              border: '1px solid #ddd',
            }}
          >
            {month}
          </button>
          {selectedMonth === month && (
            <div
              style={{
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginTop: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {moviesByMonth[month].map((movie, index) => (
                <p key={index}>{movie}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
