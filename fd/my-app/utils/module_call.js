// const base_url = "http://localhost:8000/";
const backendBaseUrl = 'http://localhost:8000';

// const post_call = async (payload, path) => {
//   const res = await fetch(`${base_url}/${path}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   const res_data = res.json();

//   return res_data;
// };


// export { post_call };

const addToFavorites = (movie) => {
    fetch(`${backendBaseUrl}/api/genres`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify(movie),
    })
    .then(response => response.json())
    // .then(data => setFavorites([...favorites, data.favorites]));
    .then(data => {
        console.log('Response data:', data);
        // You can uncomment the following line if you want to update the favorites list
        // setFavorites([...favorites, data.favorites]);
      })
      .catch(error => console.error('Error:', error));
  };
  
  export { addToFavorites };