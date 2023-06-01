import { useState, useEffect } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  });

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("0");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setResult(eval(input) + "");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (event) => {
    const value = event.key;
    if (/\d|-|\+|\*|\/|\.|Enter|Backspace|Escape/.test(value)) {
      if (value === "Enter") {
        handleButtonClick("=");
      } else if (value === "Backspace") {
        handleButtonClick("←");
      } else if (value === "Escape") {
        handleButtonClick("C");
      } else {
        handleButtonClick(value);
      }
    }
  };

  return (
    <div className="items-center">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="github.com/Ishaan2053">Ishaan2053</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <table className="calculator">
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" className="text-white user-select-none" id="display-box" value={input} onChange={(e) => setInput(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("1")}>1</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("2")}>2</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("3")}>3</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("+")}>+</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("4")}>4</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("5")}>5</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("6")}>6</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("-")}>-</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("7")}>7</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("8")}>8</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("9")}>9</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("*")}>*</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick(".")}>.</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("0")}>0</button></td>
            <td><button className="btn btn-success" onClick={() => handleButtonClick("=")}>=</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("/")}>/</button></td>
          </tr>
          <tr>
            <td><button className="btn btn-danger" onClick={() => handleButtonClick("C")}>C</button></td>
            <td><button className="btn btn-primary" onClick={() => handleButtonClick("←")}>←</button></td>
            <td colSpan="2">{result}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}