import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

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
    }
  };
  return (
    <>
      <Navbar title="Ankit's Navbar" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm
          textAreaName="Add Info"
          heading="Enter Your Info"
          mode={mode}
        />
      </div>
      <div className="container">
        <About mode={mode} />
      </div>
    </>
  );
}
export default App;
