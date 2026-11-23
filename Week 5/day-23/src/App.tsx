import ThemeProvider from "./context/ThemeProvider";
import Header from "./components/Header";
import ThemePanel from "./components/ThemePanel";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Day 23 - Context Experiment</h1>

        <Header />
        <ThemePanel />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;