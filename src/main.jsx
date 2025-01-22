import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import "./styles/index.css";
import "./styles/font.css";
import QueryProvider from "./context/QueryProvider";
import SwitcherProvider from "./context/SwitcherProvider";
import ReduxProvider from "./context/reduxProvider";
import Router from "./routers/Router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ReduxProvider>
    <SwitcherProvider>
      <QueryProvider>
        <Toaster richColors closeButton position="top-right" />
        <Router />
      </QueryProvider>
    </SwitcherProvider>
  </ReduxProvider>
);
