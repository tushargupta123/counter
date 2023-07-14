import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Counter.css";

const Counter = ({ counter }) => {
  const dispatch = useDispatch();
  const [startValue, setStartValue] = useState(counter.startValue);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT_COUNTER", payload: counter.id });
  };

  const decrementCounter = () => {
    dispatch({ type: "DECREMENT_COUNTER", payload: counter.id });
  };

  const resetCounter = () => {
    dispatch({ type: "RESET_COUNTER", payload: counter.id });
  };

  const removeCounter = () => {
    dispatch({ type: "REMOVE_COUNTER", payload: counter.id });
  };

  const handleStartValueChange = (e) => {
    setStartValue(parseInt(e.target.value, 10));
  };

  const handleUpdateStartValue = () => {
    dispatch({
      type: "UPDATE_START_VALUE",
      payload: {
        id: counter.id,
        startValue: startValue,
      },
    });
  };

  return (
    <div className="counter-container">
      <h3>{counter.name}</h3>
      <p>Value: {counter.value}</p>
      <div className="input-container">
        <input
          type="number"
          value={startValue}
          onChange={handleStartValueChange}
          placeholder="Start Value"
          className="counter-input"
        />
        <button onClick={handleUpdateStartValue} className="counter-button">
          Update Start Value
        </button>
      </div>

      <div className="button-container">
        {" "}
        {/* Apply the button container class */}
        <button onClick={incrementCounter} className="counter-button">
          Increment
        </button>
        <button onClick={decrementCounter} className="counter-button">
          Decrement
        </button>
        <button onClick={resetCounter} className="counter-button">
          Reset
        </button>
        <button onClick={removeCounter} className="counter-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
