import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../src/features/counter/Counter";

const Home = () => {
  const counters = useSelector((state) => state.counterReducer.counters);
  const dispatch = useDispatch();
  const [counterName, setCounterName] = useState("");

  const addCounter = () => {
    dispatch({
      type: "ADD_COUNTER",
      payload: {
        id: counters.length + 1,
        name: counterName,
        value: 0,
        startValue: 0,
      },
    });
  };
  const removeCounter = (id) => {
    dispatch({ type: "REMOVE_COUNTER", payload: id });
  };
  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={counterName}
          onChange={(e) => setCounterName(e.target.value)}
          placeholder="Enter counter name"
        />
        <button onClick={addCounter} className="btn-home">
          Add Counter
        </button>
      </div>
      <div className="counters-container">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            removeCounter={removeCounter}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
