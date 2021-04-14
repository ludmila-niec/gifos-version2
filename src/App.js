import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/Search";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Search from "./views/Search";
import Footer from "./components/Footer";
// router
import { Switch, Route } from "react-router-dom";
// styles
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import useTheme from "./theme/useTheme";
import * as themes from "./theme/theme";

function App() {
  const { lightTheme, changeThemeHandler } = useTheme();

  return (
    <>
      <ThemeProvider theme={lightTheme ? themes.light : themes.dark}>
        <GlobalStyles />
        <Navbar changeTheme={changeThemeHandler} />
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
