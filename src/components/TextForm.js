import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    let newText = document.getElementById("exampleFormControlTextarea1").value;
    newText = newText.toUpperCase();
    setText(newText);
  };

  return (
    <>
      <div className="my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-4" onClick={handleUpperClick}>
          Convert To UPPERCASE
        </button>
        <h2>Result is: {text}</h2>
        <p>
          <span style={{ fontWeight: "bold" }}>Words: </span>
          {text.split(" ").length}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Characters: </span>
          {text.length}
        </p>
      </div>
    </>
  );
}
