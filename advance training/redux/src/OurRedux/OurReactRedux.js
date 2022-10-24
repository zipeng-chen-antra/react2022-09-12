import React, { createContext, useContext, useEffect, useState } from "react";
import useForceUpdate from "../hooks/useForceUpdate";

export const OurReactReduxContext = createContext();

export function OurProvider({ store, children }) {
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    store.subscribe(() => {
      forceUpdate();
    });
  }, []);

  return (
    <OurReactReduxContext.Provider value={{...store}}>
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
