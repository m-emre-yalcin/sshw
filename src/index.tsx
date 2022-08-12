import * as React from "react";
import App from "./App";
import "./assets/styles/global.scss";
import reportWebVitals from "./reportWebVitals";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root")!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="login" />);
reportWebVitals();
