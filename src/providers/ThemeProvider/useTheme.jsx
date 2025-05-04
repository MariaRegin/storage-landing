import { LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
