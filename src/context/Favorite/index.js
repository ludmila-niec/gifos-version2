import React, { useEffect, useReducer, createContext, useState } from "react";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../utils/localStorage";

import { favoritesReducer, localReducer } from "./reducer";
import * as types from "./actionTypes";
import * as api from "../../services/api";
// context
export const FavoriteContext = createContext(null);
let localFavorites;
let initialFavorites = [];

try {
  localFavorites = getItemLocalStorage("favorites") ?? [];
} catch (err) {
  console.log(err);
  localFavorites.favorites = [];
  throw new Error("The favorites couldn't be parsed");
}

export function FavoriteProvider({ children }) {
  const [localFavs, dispatchLocal] = useReducer(localReducer, localFavorites);
  const [gifs, dispatch] = useReducer(favoritesReducer, initialFavorites);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setItemLocalStorage("favorites", localFavs);
  }, [localFavs]);

  const loadFavoritesSuccess = (data) => {
    dispatch({ type: types.GET_FAVORITES, payload: { data } });
  };

  const addFavoriteSucess = (data) => {
    dispatch({ type: types.ADD_FAVORITE, payload: { data } });
  };

  const removeFavoriteSucess = (id) => {
    dispatch({ type: types.REMOVE_FAVORITE, payload: { id } });
  };

  const loadFavorites = async () => {
    if (localFavs.length === 0) return;
    const list = localFavs.toString();
    try {
      setIsLoading(true);
      const response = await api.loadUserFavorites(list);
      const { data, meta } = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      return loadFavoritesSuccess(data);
    } catch (error) {
      console.log(error);
      setError("something went wrong :(");
    } finally {
      setIsLoading(false);
    }
  };

  const addFavorite = async (id) => {
    try {
      const response = await api.getGifbyId(id);
      const { data, meta } = response;
      if (meta.status !== 200) throw new Error(meta.msg);
      // save to local storage
      addLocalFavorite(data.id);
      return addFavoriteSucess(data);
    } catch (err) {
      console.log(error);
      setError("something went wrong :(");
    }
  };

  const removeFavorite = (id) => {
    removeLocalFavorite(id);
    return removeFavoriteSucess(id);
  };

  // local actions
  const loadLocalFavorites = () => {
    dispatchLocal({ type: types.GET_LOCAL_FAVORITES });
  };
  const addLocalFavorite = (id) => {
    dispatchLocal({ type: types.ADD_LOCAL_FAVORITE, payload: { id } });
  };
  const removeLocalFavorite = (id) => {
    dispatchLocal({ type: types.REMOVE_LOCAL_FAVORITE, payload: { id } });
  };

  const contextValue = {
    gifs,
    isLoading,
    error,
    loadFavorites,
    addFavorite,
    removeFavorite,
    localFavs,
   
  };
  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
}

