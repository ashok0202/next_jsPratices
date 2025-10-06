import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CountProvider } from "./context/count-context.tsx";
import { ProductProvider } from "./context/product-context.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
