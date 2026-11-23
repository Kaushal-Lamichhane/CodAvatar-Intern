import { createContext } from "react";

// Define the supported theme values.
export type Theme = "light" | "dark";

// Define everything our Context will share.
export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

// undefined means no Provider has supplied a value yet.
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default ThemeContext;