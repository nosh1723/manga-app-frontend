import { createContext, useEffect, useState, useRef } from "react";
import { getAllManga } from "../services";

const AppContext = createContext();

const ContextWrap = ({ children }) => {
  const [manga, setManga] = useState([]);
  const [page, setPage] = useState(1);
  const [isReRender, setIsReRender] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.continuousStart();
    const fetchDataManga = async () => {
      const result = await getAllManga(page);
      setManga(result);
    };
    fetchDataManga();
    ref.current.complete();
  }, [page, isReRender]);
  const data = {
    setPage,
    page,
    manga,
    setIsReRender,
    isReRender,
    ref,
  };
  return (
    <>
      <AppContext.Provider value={data}>{children}</AppContext.Provider>
    </>
  );
};

export { AppContext, ContextWrap };
