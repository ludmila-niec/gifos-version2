import { useState, useEffect, useRef } from "react";
import * as api from "../services/api";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const isMountedRef = useRef(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  //   load suggestions while typing in the input
  useEffect(() => {
    let cancel = false;
    async function init() {
      try {
        if (!query.trim()) return setSuggestions([]);
        setIsLoading(true);
        const response = await api.autocompleteSearch(query);
        if (cancel) return;
        const { data, meta } = response;
        if (meta.status !== 200) throw new Error(meta.msg);
        setSuggestions(data);
      } catch (err) {
        setError({ suggestion: "Something went wrong" });
      } finally {
        setIsLoading(false);
      }
    }
    init();

    return () => (cancel = true);
  }, [query]);

  // submit search
  const submitSearch = async (keyword) => {
    if (!keyword.trim()) return;
    try {
      setIsLoading(true);
      setQuery("");
      setError({});
      const response = await api.searchGif(keyword);
      const { data, meta, pagination } = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      if (pagination.count === 0)
        throw new Error("No more gifs found for the search");
      // setError({search: "No more gis found for the search"})
      setGifs(data);
      // redirect to new page
    } catch (err) {
      setGifs([]);
      setError({ search: "something went wrong" });
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreGifs = async (keyword) => {
    try {
      isMountedRef.current = true;
      setIsLoading(true);
      setError("");
      let offset = gifs.length + 1;
      const response = await api.loadMoreResultsGifs(keyword, offset);
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
      if (isMountedRef.current)
        setError({ loadMore: "Something went wrong :(" });
      console.log(err);
    } finally {
      if (isMountedRef.current) setIsLoading(false);
    }
  };

  return {
    query,
    setQuery,
    gifs,
    suggestions,
    setSuggestions,
    isLoading,
    error,
    handleChange,
    submitSearch,
    loadMoreGifs,
  };
};

export default useSearch;
