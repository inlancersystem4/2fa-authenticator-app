import PropTypes from "prop-types";
import { SunMedium, Moon } from "lucide-react";
import { useThemeSwitcher } from "react-css-theme-switcher";

export default function ThemeSwitch({ toggleDarkMode }) {
  const { currentTheme } = useThemeSwitcher();

  return (
    <button
      onClick={toggleDarkMode}
      className={`theme-swich ${currentTheme === "light" ? "active" : ""}`}
    >
      <Moon className="w-4 h-4" />
      <SunMedium className="w-4 h-4" />
    </button>
  );
}

ThemeSwitch.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
