import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import { fetchArticles } from "../api";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // const [total_pages, setTotalPages] = useState(1);

  const searchArticles = async (newQuery) => {
    setQuery(`${Date.now()}/${newQuery}`);
    // setTotalPages(1);
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
        const fetchedData = await fetchArticles(query.split("/")[1], page);
        // const fetchedTotalPage = await totalPagesArticles(total_pages);
        // setTotalPages(fetchedTotalPage);

        setArticles((prevArticles) => [...prevArticles, ...fetchedData]);
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
    </>
  );
};
