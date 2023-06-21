import React, { useState, useEffect } from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('0');

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clear();
    } else {
      const button = document.querySelector(`button[name="${key}"]`);
      if (button) {
        button.click();
      }
    }
  };

  const handleClick = (e) => {
    const value = e.target.name;

    if (value === '.') {
      // Allow decimal point only if it's a valid input
      setResult((prevResult) => {
        const lastNum = getLastNumber(prevResult);
        if (!lastNum.includes('.')) {
          return prevResult + value;
        }
        return prevResult;
      });
    } else if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else if (result === 'Error') {
      setResult(value);
    } else {
      setResult((prevResult) => {
        const lastChar = prevResult.slice(-1);
        if (
          isOperator(lastChar) &&
          isOperator(value) &&
          value !== '-' &&
          lastChar !== '-'
        ) {
          return prevResult.slice(0, -1) + value;
        } else if (isOperator(value) && value !== '-') {
          return prevResult + value;
        }
        return prevResult === '0' ? value : prevResult + value;
      });
    }
  };

  const calculate = () => {
    try {
      let processedResult = result.replace(/([-+/*])\1+/g, '$1'); // Remove consecutive operators
      processedResult = processedResult.replace('--', '+'); // Convert double negative to positive
      setResult(eval(processedResult).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('0');
  };

  const isOperator = (value) => {
    return value === '+' || value === '-' || value === '*' || value === '/';
  };

  const getLastNumber = (str) => {
    // Extract the last number from the string
    const matches = str.match(/(-?\d+(\.\d+)?)[^\d]*$/);
    return matches ? matches[1] : '';
  };
  
  return (
    <div className="calculator">
      <input type="text" value={result} readOnly id="display" />

      <div className="keypad">
        <button onClick={clear} className="highlight" id="clear">
          Clear
        </button>
        <button onClick={handleClick} name="7" id="seven">
          7
        </button>
        <button onClick={handleClick} name="8" id="eight">
          8
        </button>
        <button onClick={handleClick} name="9" id="nine">
          9
        </button>
        <button onClick={handleClick} name="/" id="divide">
          /
        </button>
        <button onClick={handleClick} name="4" id="four">
          4
        </button>
        <button onClick={handleClick} name="5" id="five">
          5
        </button>
        <button onClick={handleClick} name="6" id="six">
          6
        </button>
        <button onClick={handleClick} name="*" id="multiply">
          *
        </button>
        <button onClick={handleClick} name="1" id="one">
          1
        </button>
        <button onClick={handleClick} name="2" id="two">
          2
        </button>
        <button onClick={handleClick} name="3" id="three">
          3
        </button>
        <button onClick={handleClick} name="+" id="add">
          +
        </button>
        <button onClick={handleClick} name="0" id="zero">
          0
        </button>
        <button onClick={handleClick} name="." id="decimal">
          .
        </button>
        <button onClick={calculate} className="highlight" id="equals">
          =
        </button>
        <button onClick={handleClick} name="-" id="subtract">
          -
        </button>
      </div>
    </div>
  );
};

export default Calculator;
