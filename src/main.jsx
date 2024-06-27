import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { personalReducer } from "./reducers/pesonalReducer";
import { educationReducer } from "./reducers/educationReducer.js";
import { experienceReducer } from "./reducers/experienceReducer.js";
const store = configureStore({
  reducer: {
    personal: personalReducer,
    education: educationReducer,
    experience: experienceReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
