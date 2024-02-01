import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "eweU7n7QNHGPet9x6rguFqq5agNu - FnnqAkMJV9TwHY";

// export default class NewsApiService {
//   constructor() {
//     this.searchAnimal = '';
//     this.page = 1;
//     this.per_page = 40;
//     this.totalHits = 1;
//   }

// async fetchHits() {
//   try {
//     const queryParams = {
//       key: API_KEY,
//       q: `${searchAnimal}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       // safesearch: true,
//       page: `${page}`,
//       // per_page: `${per_page}`,
//     };

//     const response = await axios.get(BASE_URL, { params: queryParams });
//     this.incrementPage();
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching hits:', error);
//     throw error;
//   }
// }

// const YOUR_ACCESS_KEY = "eweU7n7QNHGPet9x6rguFqq5agNu - FnnqAkMJV9TwHY";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState(0);
  // useEffect(() => {
  //   // 1. Оголошуємо асинхронну функцію
  //   async function fetchArticles() {
  //     const response = await axios.get(
  //       "<https://hn.algolia.com/api/v1/search?query=react>"
  //     );
  //     console.log(response);
  //   }

  //   // 2. Викликаємо її одразу після оголошення
  //   fetchArticles();
  // }, []);

  const notify = () => toast("Here is your toast.");
  async function searchArticles() {
    try {
      const queryParams = {
        key: API_KEY,
        q: `${searchAnimal}`,
        image_type: "photo",
        orientation: "horizontal",

        page: `${page}`,
      };
      const response = await axios.get(BASE_URL, { params: queryParams });
      console.log(response);
      return response.data.hits;
    } catch (error) {}
  }

  return (
    <>
      <SearchBar onSearch={searchArticles}></SearchBar>
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
      <LoadMoreBtn></LoadMoreBtn>
      <ImageGallery></ImageGallery>
      <Loader></Loader>
      <ErrorMessage></ErrorMessage>
      <ImageModal></ImageModal>
    </>
  );
};
