import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const clientID = "eweU7n7QNHGPet9x6rguFqq5agNu-FnnqAkMJV9TwHY";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: { client_id: clientID, query, page, per_page: 10 },
  });

  return response.data.results;
};

// export const totalPagesArticles = async () => {
//   const response = await axios.get(BASE_URL, {
//     params: { client_id: clientID, query },
//   });

//   return response.data.total_pages;
// };
