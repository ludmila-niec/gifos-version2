import { useState, useEffect } from "react";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../utils/localStorage";

const useTheme = () => {
  const [lightTheme, setLightTheme] = useState(() => {
    const localTheme = getItemLocalStorage("lightTheme") ?? true
    return localTheme
  })
  useEffect(() =>{
    setItemLocalStorage("lightTheme", lightTheme)
  },[lightTheme])

  const changeThemeHandler = () => {
    setLightTheme((prevTheme) => !prevTheme);

  };

  return { lightTheme, changeThemeHandler };
};

export default useTheme;
