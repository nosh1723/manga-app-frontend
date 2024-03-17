import { createContext, useEffect, useState, useRef } from "react";
import { getAllManga } from "../services";
import LoadingBar from "react-top-loading-bar";

const AppContext = createContext();

const ContextWrap = ({ children }) => {
  const [manga, setManga] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [isReRender, setIsReRender] = useState(true);
  const ref = useRef(null);
  const query = {
    page,
    searchValue,
  };
  useEffect(() => {
    ref.current.continuousStart();
    const fetchDataManga = async () => {
      const result = await getAllManga(query);
      setManga(result);
    };
    fetchDataManga();
    ref.current.complete();
  }, [page, searchValue, isReRender]);
  const data = {
    setPage,
    page,
    setSearchValue,
    searchValue,
    setManga,
    manga,
    setIsReRender,
    isReRender,
    ref,
  };
  return (
    <>
      <AppContext.Provider value={data}>
        <LoadingBar color="#2998ff" ref={ref} shadow={true} />
        {children}
      </AppContext.Provider>
    </>
  );
};

export { AppContext, ContextWrap };
