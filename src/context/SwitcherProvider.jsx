import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  ThemeSwitcherProvider,
  useThemeSwitcher,
} from "react-css-theme-switcher";

const themes = {
  light: "public/light.css",
  dark: "public/dark.css",
};

export default function SwitcherProvider({ children }) {
  return (
    <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
      <SwitcherContent>{children}</SwitcherContent>
    </ThemeSwitcherProvider>
  );
}

function SwitcherContent({ children }) {
  const { status, currentTheme } = useThemeSwitcher();

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (currentTheme !== "light") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [currentTheme]);

  return status === "loading" ? (
    <main className="w-full h-dvh flex items-center justify-center">
      <p>Wait a minute!</p>
    </main>
  ) : (
    children
  );
}

SwitcherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

SwitcherContent.propTypes = {
  children: PropTypes.node.isRequired,
};
