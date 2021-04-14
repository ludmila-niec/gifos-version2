import React, { useState, useEffect, createContext, useContext } from "react";

const defaultValue = {};
const BreakpointContext = createContext(defaultValue);

const BreakpointProvider = ({ children, breakpoints }) => {
  // save the matching query
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(breakpoints);
    let isAttached = false;

    // the handle returns object with the query updated
    //  example {sm: true, md:false}
    // tip  !!Object  => Converts Object to boolean
    // (0, null, undefined) => returns false otherwise true

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(
          mediaQueryLists[media] && mediaQueryLists[media].matches
        );
        return acc;
      }, {});
      //Setting state to the updated matches
      // when document either starts or stops matching a query
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches = {};
      keys.forEach((media) => {
        if (typeof breakpoints[media] === "string") {
          mediaQueryLists[media] = window.matchMedia(breakpoints[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      //   set initial matching query to state
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof breakpoints[media] === "string") {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    //   clean up function. remove listeners when the component unmounts
    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof breakpoints[media] === "string") {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [breakpoints]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

//   custom hook to consume MediaQueries context
function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error(
      "useBreakpoint must be used within BreakpointProvider. Wrap a parent component in <BreakpointProvider> to fix this error"
    );
  }
  return context;
}

export { BreakpointProvider, useBreakpoint };
