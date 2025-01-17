import { Link, Outlet } from "react-router";
import "../styles/authentication.css";
import Logo from "../assets/image/caprock-logo.svg";
import AuthSilder from "../components/AuthSilder";

export default function AuthLayout() {
  return (
    <main className="auth-layout">
      <div className="auth-slider">
        <div className="flex flex-col justify-between w-full h-full relative z-10 p-10">
          <Link to="/">
            <img src={Logo} alt="logo" width="160" height="auto" />
          </Link>
          <AuthSilder />
        </div>
      </div>
      <div className="auth-form-side">
        <div className="bg-lightBackground px-3.5 py-2 flex justify-end">
          <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-end gap-0.5">
              <label className="font-serif text-xs leading-none">
                <span className="text-darkGray">Appearance</span>
              </label>
              <label className="font-serif text-xs leading-none">
                Light Mode
              </label>
            </div>
            <p className="text-darkGray font-serif">:</p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
