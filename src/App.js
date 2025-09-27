import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alertMessage, setAlertMessage] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.classList.add("dark-mode");
      const textAreaBox = document.getElementById(
        "exampleFormControlTextarea1"
      );
      if (textAreaBox) {
        textAreaBox.style.backgroundColor = "#343a40";
        textAreaBox.style.color = "white";
      }
      const accordionItemsHeader =
        document.querySelectorAll(".accordion-button");
      accordionItemsHeader.forEach((item) => {
        item.style.backgroundColor = "#343a40";
        item.style.color = "white";
      });
      const accordionItems = document.querySelectorAll(".accordion-item");
      accordionItems.forEach((item) => {
        item.style.backgroundColor = "#343a40";
        item.style.color = "white";
      });
      setAlertMessage({
        message: "Dark mode has been enabled",
        type: "success",
      });
      setTimeout(() => {
        setAlertMessage("");
      }, 3500);
    } else {
      setMode("light");
      const textAreaBox = document.getElementById(
        "exampleFormControlTextarea1"
      );
      if (textAreaBox) {
        textAreaBox.style.backgroundColor = "white";
        textAreaBox.style.color = "black";
      }
      document.body.classList.remove("dark-mode");
      const accordionItemsHeader =
        document.querySelectorAll(".accordion-button");
      accordionItemsHeader.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "black";
      });
      const accordionItems = document.querySelectorAll(".accordion-item");
      accordionItems.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "black";
      });
      setAlertMessage({
        message: "Light mode has been enabled",
        type: "success",
      });
      setTimeout(() => {
        setAlertMessage("");
      }, 3500);
    }

    const showAlert = (message, type) => {
      setAlertMessage(message);
      setTimeout(() => {
        setAlertMessage({
          message: message,
          type: type,
        });
      }, 3500);
    };
  };
  return (
    <Router>
      <div>
        <Navbar title="Ankit's Navbar" mode={mode} toggleMode={toggleMode} />
        <div className="container my-4">
          <Alert alertMessage={alertMessage} />
        </div>

        <Routes>
          <Route
            path="/about"
            element={
              <div className="container my-4">
                <About mode={mode} />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="container my-4">
                <TextForm
                  textAreaName="Add Info"
                  heading="Enter Your Info"
                  showAlert={setAlertMessage}
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
