import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <h1>Date Counter</h1>
      <div className="buttons">
        <button onClick={() => setStep((step) => step - 1)}>- </button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="buttons">
        <button onClick={() => setCount((count) => (count -= step))}>- </button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((count) => (count += step))}>+</button>
      </div>
      <div className="buttons">
        <div
          style={{ width: "500px", height: "60px", border: "1px solid gray" }}
        >
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from today is`
              : `${count} days ego was`}
          </span>
          {date.toDateString()}
        </div>
      </div>
    </div>
  );
}
