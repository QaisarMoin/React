import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setthemeMode] = useState("ligth");

  //hamne theme.js file mein ligthTheme and darkTheme ko define nahi kare teh iss liye react hame ek funcanitily deta hai ke ham unhi function ka same naam likh kar funcnality ko define kar sakte hai kesi bhi file me
  const ligthTheme = () => {
    setthemeMode("ligth");
  };
  const darkTheme = () => {
    setthemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    //value={{ themeMode, ligthTheme, darkTheme }} means hai ThemeProvider me se mujhe themeMode, ligthTheme, darkTheme ka access do
    <ThemeProvider value={{ themeMode, ligthTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* themeCard */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
