import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {todoStore} from "./store/TodoStore";

function App() {
  return (
    <div className="App">
      <TodoList store={ todoStore } />
    </div>
  );
}

export default App;
