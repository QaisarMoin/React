import { createContext, useContext } from "react";

//todo ke andar sab kuch Arrays he toh hai
//create context ke andar ham todos ko ek array ke andar store kar ke rakh rahe hai
// createContext({todos : [{todo1},{todo2},.... ]})
//Har todo ek object ke form mein hoga nad har todo ke pass kuch default properties honge
export const TodoContext = createContext({
  // ye jo niche hai ye todos kese dekhenge wo dekha ye he hamne
  todos: [
    { id: Date.now(), todoMsg: "todo massage", completed: false },
    //ye sirf dekhane ke liye hai bas kam kuch nahi hai

    // is todos ke andar abhi aur bhi todoObjects ayenge {},{},{}..... uppar wala toh ek sample hai
  ],
  // niche wale mein addTodo ko ek todoMessage chiyea Ek naya todo add karne ke liye
  addTodo: (todoMsg) => {},
  //update todo means edit todo ko uss todo ke id and todo Message chiyea usko update karne ke liye
  updateTodo: (id, todoMsg) => {},
  //delete karne ke liye sirf id ke jarurat hai
  deleteTodo: (id) => {},
  //toggle ke liye bhi sirf id ke jarurat hai
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

// ab yaha se jao index.js mein
