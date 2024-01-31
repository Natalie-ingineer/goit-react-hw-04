import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState(0);

  return;
  <>
    <SearchBar></SearchBar>
    <LoadMoreBtn></LoadMoreBtn>
    <ImageGallery></ImageGallery>
    <Loader></Loader>
    <ErrorMessage></ErrorMessage>
    <ImageModal></ImageModal>
  </>;
};
