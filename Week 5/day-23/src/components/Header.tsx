import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
  // Read the shared Context value.
  const context = useContext(ThemeContext);

  // Protect against using Header outside its Provider.
  if (!context) {
    throw new Error("Header must be used inside ThemeProvider");
  }

  // Extract the theme and toggle function.
  const { theme, toggleTheme } = context;

  console.log("Header rendered");

  return (
    <header>
      <h2>TaskFlow Header</h2>

      <p>Current theme: {theme}</p>

      {/* Clicking this button changes the shared theme. */}
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </header>
  );
}

export default Header;