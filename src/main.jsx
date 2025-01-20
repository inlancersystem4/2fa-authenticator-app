import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "sonner";
import "./styles/index.css";
import "./styles/font.css";
import QueryProvider from "./context/QueryProvider";
import SwitcherProvider from "./context/SwitcherProvider";
import App from "./app";
import AuthLayout from "./layouts/Auth";
import Login from "./pages/Login";
import QRScan from "./pages/QrScan";
import RecoveryCode from "./pages/RecoveryCode";
import ApproveCode from "./pages/ApproveCode";
import PageNotFound from "./pages/PageNotFound";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <SwitcherProvider>
    <QueryProvider>
      <Toaster richColors closeButton position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="qr-scanner" element={<QRScan />} />
            <Route path="recovery-code" element={<RecoveryCode />} />
            <Route path="approve-code" element={<ApproveCode />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </SwitcherProvider>
);
