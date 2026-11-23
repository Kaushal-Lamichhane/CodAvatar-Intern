import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemePanel() {
  // Read the shared Context value.
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemePanel must be used inside ThemeProvider");
  }

  const { theme } = context;

  console.log("ThemePanel rendered");

  return (
    <section>
      <h2>Theme Panel</h2>
      <p>Theme received from Context: {theme}</p>
    </section>
  );
}

export default ThemePanel;