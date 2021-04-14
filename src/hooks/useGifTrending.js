import { useState, useEffect, useRef } from "react";
import * as api from "../services/api";

const useGifTrending = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const isMountedRef = useRef(false);

  const getGifs = async () => {
    try {
      isMountedRef.current = true;
      setIsLoading(true);
      setError('')
      const response = await api.getTrendingGifs();
      const { data, meta, pagination } = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      if (pagination.count === 0)
        throw new Error("No more gifs found in the trending section");
      setGifs(data);
    } catch (err) {
      if (isMountedRef.current) setError('Something went wrong :(');
      console.log(err);
      throw err
    } finally {
      if (isMountedRef.current) setIsLoading(false);
    }
  };

  const loadMoreGifs = async () => {
    try {
      isMountedRef.current = true;
      setIsLoading(true);
      setError('')
      let offset = gifs.length;
      const response = await api.loadMoreTrendingGifs(offset);
      const { data, meta, pagination } = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      if (pagination.count === 0)
        throw new Error("No more gifs found in the trending section");
      if (isMountedRef.current)
        setGifs((prevGifs) => {
          const prevArray = [...prevGifs];
          return prevArray.concat(data);
        });
    } catch (err) {
      if (isMountedRef.current) setError('Something went wrong :(');
      console.log(err);
      throw err;
    } finally {
      if (isMountedRef.current) setIsLoading(false);
    }
  };

  //   get trending gifs on load
  useEffect(() => {
    getGifs();

    return () => (isMountedRef.current = false);
  }, []);

  return { gifs, isLoading, error, loadMoreGifs };
};

export default useGifTrending;
