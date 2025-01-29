import { Link, Outlet, useNavigate } from "react-router";
import "../styles/authentication.css";
import Logo from "../assets/image/caprock-logo.svg";
import AuthSilder from "../components/AuthSilder";
import ThemeSwitch from "../components/ThemeSwitch";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function AuthLayout() {
  const { currentTheme, switcher, themes } = useThemeSwitcher();
  const navigate = useNavigate();
  const token = useSelector((state) => state.session.token);

  const toggleDarkMode = () => {
    switcher({ theme: currentTheme !== "light" ? themes.light : themes.dark });
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <main className="auth-layout">
      <div className="auth-slider">
        <div className="flex flex-col justify-between w-full h-full relative z-10 p-10">
          <Link to="/">
            <img src={Logo} alt="logo" width="160" height="auto" />
          </Link>
          <div className="w-full  relative">
            <AuthSilder />
          </div>
        </div>
      </div>
      <div className="auth-form-side">
        <div className="bg-lightBackground px-3.5 py-2 flex justify-end">
          <div className="flex items-center gap-1.5">
            <div className="flex flex-col items-end gap-0.5">
              <label className="font-serif text-xs leading-none">
                <span className="text-darkGray">Appearance</span>
              </label>
              <label className="font-serif text-xs leading-none capitalize">
                {currentTheme} Mode
              </label>
            </div>
            <p className="text-darkGray font-serif">:</p>
            <ThemeSwitch toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
        <div className="w-full sm:py-3 px-3 py-10 h-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
