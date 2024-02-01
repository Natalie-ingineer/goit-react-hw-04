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
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState({
    items: [],
    loading: false,
    error: false,
  });

  const searchArticles = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles({
      items: [],
      loading: false,
      error: false,
    });
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
        setArticles((prevArticles) => ({
          ...prevArticles,
          loading: true,
          error: false,
        }));

        const queryParams = {
          client_id: clientID,
          query: `${query}`,
          page: `${page}`,
          per_page: 10,
        };

        const response = await axios.get(BASE_URL, { params: queryParams });

        setArticles((prevArticles) => {
          return {
            ...prevArticles,
            items: [...prevArticles.items, ...response.data.results],
          };
        });
      } catch (error) {
        setArticles((prevArticles) => ({ ...prevArticles, error: true }));
      } finally {
        setArticles((prevArticles) => ({ ...prevArticles, loading: false }));
      }
    }

    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchArticles} />
      {articles.error && <ErrorMessage />}
      {articles.items.length > 0 && <ImageGallery items={articles.items} />}
      {articles.loading && <Loader load={articles.loading} />}
      {articles.items.length > 0 && !articles.loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" />

      <ImageModal></ImageModal>
    </>
  );
};
