import { useState } from "react";
import type { ReactNode } from "react";
import ThemeContext from "./ThemeContext";
import type { Theme } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
    console.log("ThemeProvider rendered");
  // ThemeProvider owns the theme state.
  const [theme, setTheme] = useState<Theme>("light");

  // Switch between light and dark.
  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;