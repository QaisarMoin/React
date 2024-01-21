import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className=" w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className=" fixed bottom-12 
        flex flex-wrap  justify-center 
        px-2 
        inset-x-0"
        >
          <div
            className="  h-12 rounded-3xl  bg-slate-100 p-5  flex gap-6 justify-evenly items-center shadow-2xl
          "
          >
            <button
              className=" bg-red-700 p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className=" bg-blue-700 p-1 rounded-3xl 
             w-16 text-white border-none text-xl "
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className=" bg-green-700 p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className=" bg-purple-700 p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className=" bg-black p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("black")}
            >
              Black
            </button>

            <button
              className=" bg-pink-300 p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>

            <button
              className=" bg-slate-600 p-1 rounded-3xl 
             w-16 text-white border-none text-xl"
              onClick={() => setColor("grey")}
            >
              Slate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
