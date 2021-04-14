import { useContext } from "react";
import {FavoriteContext} from '../context/Favorite'

function useFavorite(){
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(
      "useFavorite must be used within FavoriteProvider. Wrap a parent component in <FavoriteProvider> to fix this error"
    );
  }
  return context;
  
}

export default useFavorite;
