import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import QueryProvider from "./context/QueryProvider";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  </QueryProvider>
);
