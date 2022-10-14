import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const element: HTMLElement = rootElement ? rootElement : document.body;
const root = ReactDOMClient.createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
