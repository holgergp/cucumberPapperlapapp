import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createLogger } from "redux-logger";
import bohnenReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = [
  {
    id: "1",
    art: "Äthiopien",
    vkp: "12.0",
    marge: "20.0",
    ekp: "10.0",
    rabatt: "0.0",
    vkpRabatt: "12.0",
  },
  {
    id: "2",
    art: "Burundi",
    vkp: "13.0",
    marge: "20.0",
    ekp: "11.0",
    rabatt: "0.0",
    vkpRabatt: "13.0",
  },
];

export const store = configureStore({
  reducer: {
    bohnen: bohnenReducer,
  },
  middleware: [createLogger()],
  preloadedState: { bohnen: INITIAL_STATE },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
