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
  const [loading, setLoading] = useState(false);

  const notify = () => toast("Here is your toast.");
  const searchArticles = async (query) => {
    try {
      setLoading(true);
      setArticles([]);
      const queryParams = {
        client_id: clientID,
        query: `${query}`,

        orientation: "landscape",
        page: 1,
      };
      const response = await axios.get(BASE_URL, { params: queryParams });
      setArticles(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Помилка під час запиту до API Unsplash:", error);
    }
  };

  return (
    <>
      <SearchBar onSearch={searchArticles}></SearchBar>
      {loading && <Loader load={loading} />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
      <LoadMoreBtn></LoadMoreBtn>

      <ErrorMessage></ErrorMessage>
      <ImageModal></ImageModal>
    </>
  );
};
