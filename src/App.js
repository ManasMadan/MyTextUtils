import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (darkMode === true) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#313438";
      showAlert("Dark Mode Enabled", "Success");
    }
  };

  return (
    <Router>
      <Navbar
        title="MyTextUtils"
        darkTheme={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About darkTheme={darkMode} />
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} darkTheme={darkMode} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
