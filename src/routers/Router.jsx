import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import Logo from "../assets/image/caprock-logo.svg";

const App = lazy(() => import("../App"));

// layouts
const AuthLayout = lazy(() => import("../layouts/Auth"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard"));

// page
const Login = lazy(() => import("../pages/Login"));
const QRScan = lazy(() => import("../pages/QrScan"));
const RecoveryCode = lazy(() => import("../pages/RecoveryCode"));
const ApproveCode = lazy(() => import("../pages/ApproveCode"));
const AuthenticationCode = lazy(() => import("../pages/AuthenticationCode"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<App />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="qr-scanner" element={<QRScan />} />
            <Route path="recovery-code" element={<RecoveryCode />} />
            <Route path="approve-code" element={<ApproveCode />} />
            <Route
              path="authentication-code"
              element={<AuthenticationCode />}
            />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function Loader() {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <img src={Logo} alt="logo" width="240" height="auto" />
    </main>
  );
}

export default Router;
