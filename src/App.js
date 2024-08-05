import Navbar from "./components/navbar";
import Textform from "./components/textform";
import About from "./components/about";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type, 
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  let toggleswitch = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark mode enabled", "Success.! ");
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled", "Success.! ");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Analyser"
          darkMode={darkMode}
          toggleswitch={toggleswitch}
        ></Navbar>
        <Alert alert={alert}></Alert>
        
        {/* <About></About> */}
        <Routes>
          <Route exact path="/about" element = {<About Mode={darkMode} showalert={showalert} />} />
          <Route exact path="/" element= {<Textform darkMode={darkMode} showalert={showalert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
