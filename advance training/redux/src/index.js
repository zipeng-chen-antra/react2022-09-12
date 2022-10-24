import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import counterReducer from "./reducers/counterReducer";



import { ourCreateStore } from "./OurRedux/OurRedux";
import { OurProvider } from "./OurRedux/OurReactRedux";


const myStore = ourCreateStore(counterReducer);

const root = createRoot(document.getElementById("root"));
root.render(
  <OurProvider store={myStore}>
    <App />
  </OurProvider>
);
