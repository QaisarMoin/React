import { useState } from "react";
import AddTodo from "./components/addTodo";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
