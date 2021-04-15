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
    // wait response to set data
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
        setError({ suggestion: "Fail to load suggestions" });
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
      const { data, meta} = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      setGifs(data);
    } catch (err) {
      setError({ search: "Fail to load Gifs" });
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
      const { data, meta} = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      if (isMountedRef.current)
        setGifs((prevGifs) => {
          const prevArray = [...prevGifs];
          return prevArray.concat(data);
        });
    } catch (err) {
      if (isMountedRef.current)
        setError({ loadMore:"Fail to load more gifs :(" });
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
