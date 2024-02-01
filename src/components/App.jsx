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
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const queryParams = {
          client_id: clientID,
          query: `${query.split("/")[1]}`,
          page: `${page}`,
          per_page: 10,
        };

        const response = await axios.get(BASE_URL, { params: queryParams });

        setArticles((prevArticles) => [
          ...prevArticles,
          ...response.data.results,
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery items={articles} />}
      {loading && <Loader load={loading} />}
      {articles.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" />

      <ImageModal></ImageModal>
    </>
  );
};
