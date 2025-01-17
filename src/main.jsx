import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import "./styles/index.css";
import "./styles/font.css";
import QueryProvider from "./context/QueryProvider";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryProvider>
    <Toaster richColors  closeButton position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  </QueryProvider>
);
