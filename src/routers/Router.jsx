import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const App = lazy(() => import("../App"));
const AuthLayout = lazy(() => import("../layouts/Auth"));
const Login = lazy(() => import("../pages/Login"));
const QRScan = lazy(() => import("../pages/QrScan"));
const RecoveryCode = lazy(() => import("../pages/RecoveryCode"));
const ApproveCode = lazy(() => import("../pages/ApproveCode"));
const AuthenticationCode = lazy(() => import("../pages/AuthenticationCode"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
