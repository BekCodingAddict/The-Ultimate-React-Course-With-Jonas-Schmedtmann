import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("juni 21 2027");

  date.setDate(date.getDate() + count);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div>
      <div className="range">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setCount((e) => e - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((e) => e + step)}>+</button>
      </div>
      <div className="data">
        <p>{date.toDateString()}</p>
        {(count !== 0 || step !== 1) && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
    </div>
  );
}

export default App;
