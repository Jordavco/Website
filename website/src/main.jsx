import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
