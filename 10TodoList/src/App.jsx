import { useState } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //==========================><====================\\
  //jo todos hamare pass Context mein se aayenge nuko ham store rakehnge useState mein [todos , setTodos] and jesa ke hame pata hai ke todos ko toh ham ek Arrya se banaenge
  //Default value hai ek empty Array
  //ye wahi todos hai jo hamne TodoContext.js mein banae teh and hame pata hai ke property ko define ek dusri file mein kar sakte hai
  //const [todos, setTodos] = useState([]); isme hamare pass saare Todos hai
  const [todos, setTodos] = useState([]);

  //==========================><====================\\

  //ye todoMsg uppar wale todos se nahi aa rahe hai ye form se aa raha hai
  const addTodo = (todolist) => {
    setTodos((oldTodo) => [{ id: Date.now(), ...todolist }, ...oldTodo]);
    // line no.10 mein hamare pass pure todos hai na ke ham har baar naya list add kar ke purane wale ko delete kar de rahe hai
    //isliye hamne oldTodos liye and usko psread ksr diye hai and usme ek naya todolist add kar diye hai jesa ke hamne TodoConstext.js mein define kare teh todos ek object ho toh us object mein hamne ek id joor diye hai and bache kue todolist ko ...todolist(spread operator) se add kar diye hai
  };

  //==========================><====================\\

  const updateTodo = (id, newtodoMsg) => {
    setTodos((prev) =>
      prev.map((prevTodoList) =>
        prevTodoList.id === id ? newtodoMsg : prevTodoList
      )
    );
  };

  //==========================><====================\\

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodoList) => prevTodoList.id !== id));
    // .filter work karta hai true statement par toh ham bool rahe hai ke prevTodoList ke id not equalsto hona chiyea given id ke mtlb jo equal nahi unko andar aane do and jo equal hai unko hai usko filter out kardo
  };

  //==========================><====================\\

  const toggleComplete = (id) => {
    setTodos(
      (prev) =>
        prev.map((prevTodoList) =>
          prevTodoList.id === id
            ? { ...prevTodoList, completed: !prevTodoList.completed }
            : prevTodoList
        )
      // { ...prevTodoList, completed: !prevTodoList.completed } mtlb hai baki saari values toh as itis rahne do bas completed ka status change karne do
      //is uppar wale line ka mtlb hai ke precTodoList ke id agar equal hai gven id ke (prevTodoList.id === id ?) toh us TodoObject ko open karo { ...prevTodoList, completed: !prevTodoList.completed } and uske andar ke chizeo ko spread karlo with the spread operator and jo completed hai uske value true se false kar do and false se true kardo
    );
  };

  //==========================><====================\\

  useEffect(() => {
    //accha localStorage value return karta hai String mein but hame to Json me chiyea
    const allTodos = JSON.parse(localStorage.getItem("allTodos"));

    if (allTodos && allTodos.length > 0) {
      setTodos(allTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(todos));
  }, [todos]);

  //Ab yaha se jao TodoForm.jsx mein

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
