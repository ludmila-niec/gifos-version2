import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// context
import { BreakpointProvider } from "./context/MediaQueries";
import { breakpoints } from "./context/MediaQueries/breakpoints";
import { FavoriteProvider } from "./context/Favorite";
// router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BreakpointProvider breakpoints={breakpoints}>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </BreakpointProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
