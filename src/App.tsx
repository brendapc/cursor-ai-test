import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter with Jest Testing</h1>
        <p>learn react</p>
        <Counter />
        <Counter initialValue={10} />
      </header>
    </div>
  );
}

export default App;
