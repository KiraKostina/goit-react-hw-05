import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const TOKEN_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmUzNWE2YzEwMmI1YWNhMWIwM2ViYjUzNTg3NDNkYiIsInN1YiI6IjY2NGUxMDUyNjczM2NmMmE4M2ZkMTFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2TfC4rUXtWx3PLtmzIroKB1PUz86g_2v8bWOEY8lgo';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${TOKEN_KEY}`
//   }
// };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const getTrendingMovies = async () => { 
  const response = await axios.get('/3/trending/movie/day?language=en-US', {
      headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`
    }
  });

  return response.data;
}