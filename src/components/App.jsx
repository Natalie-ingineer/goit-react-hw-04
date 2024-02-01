import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const clientID = "eweU7n7QNHGPet9x6rguFqq5agNu-FnnqAkMJV9TwHY";

export const App = () => {
  const [articles, setArticles] = useState([]);

  const notify = () => toast("Here is your toast.");
  const searchArticles = async (query) => {
    try {
      const queryParams = {
        client_id: clientID,
        query: `${query}`,

        orientation: "landscape",
        page: 1,
      };
      const response = await axios.get(BASE_URL, { params: queryParams });
      setArticles(response.data.results);
    } catch (error) {
      console.error("Помилка під час запиту до API Unsplash:", error);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchArticles}></SearchBar>
      {articles.length > 0 && (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={article.urls.small}>{article.alt_description}</a>
            </li>
          ))}
        </ul>
      )}
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
