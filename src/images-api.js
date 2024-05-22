import axios from 'axios';

const API_KEY = '52e35a6c102b5aca1b03ebb5358743db';








axios.defaults.baseURL = '';

// export const getImages = async (searchWord, currentPage) => {
//   const response = await axios.get('/search/photos', {
//     params: {
//       client_id: API_KEY,
//       query: searchWord,
//       page: currentPage,
//       per_page: 12,
//     },
//   });

//   return response.data;
// };
