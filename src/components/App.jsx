import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { Toaster } from "react-hot-toast";

import axios from "axios";

const BASE_URL = "https://api.unsplash.com/search/photos";
const clientID = "eweU7n7QNHGPet9x6rguFqq5agNu-FnnqAkMJV9TwHY";

export const App = () => {
  const [articles, setArticles] = useState({
    items: [],
    loading: false,
    error: false,
  });

  const notify = () => toast("Here is your toast.");
  const searchArticles = async (query) => {
    try {
      setArticles({
        items: [],
        loading: true,
        error: false,
      });
      const queryParams = {
        client_id: clientID,
        query: `${query}`,

        orientation: "landscape",
        page: 1,
      };

      const response = await axios.get(BASE_URL, { params: queryParams });

      setArticles((prevArticles) => ({
        ...prevArticles,
        items: response.data.results,
      }));
    } catch (error) {
      setArticles((prevArticles) => ({ ...prevArticles, error: true }));
    } finally {
      setArticles((prevArticles) => ({ ...prevArticles, loading: false }));
    }
  };

  return (
    <>
      <SearchBar onSearch={searchArticles}></SearchBar>
      {articles.loading && <Loader load={articles.loading} />}
      {articles.error && <ErrorMessage />}
      {articles.items.length > 0 && <ImageGallery items={articles.items} />}
      <Toaster />

      <LoadMoreBtn></LoadMoreBtn>

      <ImageModal></ImageModal>
    </>
  );
};
