import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "Success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "Success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Text's Extra Spaces Removed", "Success");
  };

  const [text, setText] = useState("");

  return (
    <div
      className={`mb-3 my-3 container ${
        props.darkTheme === true ? "text-light" : ""
      }`}
    >
      <label htmlFor="myBox" className="form-label">
        <h4>Enter the Text to Analyze</h4>
      </label>
      <textarea
        style={{
          height: "30vh",
          backgroundColor: props.darkTheme === true ? "#4e5359" : "white",
          color: props.darkTheme === true ? "white" : "black",
        }}
        className="form-control"
        id="myBox"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows="3"
      ></textarea>

      <div className="container mt-3">
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={
            text.split(/\s+/).filter((element) => element !== "").length === 0
          }
        >
          Convert To Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
          disabled={
            text.split(/\s+/).filter((element) => element !== "").length === 0
          }
        >
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words, {text.split("").filter((element) => element !== "\n").length}{" "}
          characters.
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read.
        </p>
        <h2>Preview</h2>
        <p>
          {text.split(/\s+/).filter((element) => element !== "").length === 0
            ? "Nothing to Preview"
            : text}
        </p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  darkTheme: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
};
