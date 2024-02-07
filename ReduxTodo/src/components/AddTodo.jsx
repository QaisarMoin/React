import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Dispatch use hota hai data bhej ne ke liye this file to reducer to store
import { addTodo } from "../featrues/todo/todoSlice";

function AddTodo() {
  const [Input, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(Input));
    setTodoInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={Input}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Type Here "
          className="border-2 border-black"
        ></input>
        <button
          type="submit"
          className="w-24 
        border-2 bg-sky-700 text-sky-400
        m-2 rounded-xl"
        >
          add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
