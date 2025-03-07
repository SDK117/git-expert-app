import React from "react";
import { createRoot } from "react-dom/client";
import { GigExpertApp } from "./GigExpertApp";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GigExpertApp />
  </React.StrictMode>
);
