import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CountProvider } from "./context/count-context.tsx";
import { ProductProvider } from "./context/product-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <CountProvider>
        <App />
      </CountProvider>
    </ProductProvider>
  </StrictMode>
);
