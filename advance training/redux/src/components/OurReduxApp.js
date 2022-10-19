import React, { useContext, useEffect, useState } from "react";
import {
  useOurDispatch,
  useOurSelector,
} from "../OurRedux/OurReactRedux";

export default function OurReduxApp() {
  const value = useOurSelector((state) => state.value);
  const dispatch = useOurDispatch();

  return (
    <div>
      <h1>Count: {value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "counter/incremented" });
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter/decremented" });
        }}
      >
        minus
      </button>
      <button
        onClick={() => {
          myStore.dispatch({ type: "aosjdioqwdwq" });
        }}
      >
        do nothing
      </button>
    </div>
  );
}
