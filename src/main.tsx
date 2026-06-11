import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted fonts (replaces next/font/google). Variable fonts cover every
// weight used across the UI. The CSS variables --font-sans / --font-mono are
// defined in globals.css and consumed by the Tailwind theme.
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

import "./globals.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
