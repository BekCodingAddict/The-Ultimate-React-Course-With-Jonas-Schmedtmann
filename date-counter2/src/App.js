function App() {
  return (
    <div>
      <div className="range">
        <input type="range" min={0} max={10}></input>
      </div>
      <div className="buttons">
        <button>-</button>
        <input type="number" value={0}></input>
        <button>+</button>
      </div>
      <div className="data">
        <p>Data</p>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
