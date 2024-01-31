import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState(0);
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      const response = await axios.get(
        "<https://hn.algolia.com/api/v1/search?query=react>"
      );
      console.log(response);
    }

    // 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);

  const notify = () => toast("Here is your toast.");

  return (
    <>
      <SearchBar onSubmit={onSubmit}></SearchBar>
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
