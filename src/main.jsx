import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"; // ✅ FIXED
import App from "./App";
import "./index.css";

// ✅ Disable browser auto scroll restore (good for SPA UX)
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics /> {/* ✅ Correct placement */}
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
