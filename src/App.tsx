import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components with Jest Testing</h1>
        <div className="components-container">
          <Counter />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
