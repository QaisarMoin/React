import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../featrues/todo/todoSlice";

function Todo() {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todo.map((Todo) => (
        <li key={Todo.id}>
          {Todo.text}
          <button
            onClick={() => dispatch(removeTodo(Todo.id))}
            className="border-2 rounded-xl m-2
           text-white bg-red-500"
          >
            delete
          </button>
        </li>
      ))}
    </>
  );
}

export default Todo;
