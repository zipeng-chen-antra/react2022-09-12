import React, { createContext, useContext, useEffect, useState } from "react";
import useForceUpdate from "../hooks/useForceUpdate";

export const OurReactReduxContext = createContext();

export function OurProvider({ store, children }) {
  const [bool, toggle] = useState(true);

  useEffect(() => {
    store.subscribe(() => {
      toggle((prev) => !prev);
    });
  }, []);

  return (
    <OurReactReduxContext.Provider key={bool ? "abc" : "abcd"} value={store}>
      {children}
    </OurReactReduxContext.Provider>
  );
}

export function useOurSelector(getStateFn) {
  const myStore = useContext(OurReactReduxContext);
  return getStateFn(myStore.getState());
}

export function useOurDispatch() {
  const myStore = useContext(OurReactReduxContext);
  return myStore.dispatch;
}
