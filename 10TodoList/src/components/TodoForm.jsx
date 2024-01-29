import React, { useState } from "react";
import { useTodo } from "../context";
//ye jo TodoForm hai ye inputBox and Add Button ke function define karta hai
//TodoForm mein ham kaam karenge ke ko abhi tak hamne context ke funtion App.jsx mein define kare hai toh wo funtion mein input se value kese aayge
//App.jsx mein hamne ye set kare hai ke input se text aane ke baad kiya karna hai
//yaha par ham ye baat karenge ke input se text laaye kese

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const { addTodo } = useTodo();

  const addTodoList = (e) => {
    e.preventDefault();
    if (!inputText) return;

    //kiyo ke id:Date.now() ham App.jsx mein de chuke hai is liye ham yaha par addTodo me nahi de rahe hai
    addTodo({ todoMsg: inputText, completed: false });
    setInputText("");
  };

  return (
    <form className="flex" onSubmit={addTodoList}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={inputText}
        //value={inputText} ye jo value hai ye jab App reload hota hai ye uski value hai
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
