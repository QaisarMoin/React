import { useState } from "react";
//---------------------><-------------------------\\
//2) From this {useState} ya se ham Hooks ko import karte hai
//---------------------><-------------------------\\

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //---------------------><-------------------------\\
  //3)From here we start to using Hooks like useState
  //useState() respnsible hai state ko change karne ke liye and is change ko propogate kiya jata hai DOM ke andar
  //useState(give any default value here except function)
  //---------------------><-------------------------\\
  //here i am giving the default value 15 to the useState
  const [counter, qaisarCounter] = useState(15);
  //im above line counter is variable like any other varible and setCounter is the funtion which is responsible for the change in the counter variable
  //AND setCounter function ko call karna hota hai and usme ye batana hota hai ke call karne ke baad kiya work karna hai

  // let counter = 15;

  let addValue = () => {
    // counter = counter + 1;
    //---------------------><-------------------------\\
    //1) in uppar wale me ham dekhenge ke counter ke value increase toh ho rahe hai but display nahi ho rahi hai
    //iske wajha hai react khud controll leta hai display karwane ka na ke user ko deta hai
    //---------------------><-------------------------\\

    //---------------------><-------------------------\\
    //4) Using useState to update UI/DOM
    //---------------------><-------------------------\\
    qaisarCounter(counter + 1);
    //mtbl jab bhi setCounter call ho toh counter ki value ko +1 kardo
    //Accha ab counter ko 1000 places par use karlo sab ek sath update honge baar baar getElelmentById nahi karna padega
  };

  let removeValue = () => {
    qaisarCounter(counter - 1);
  };

  //---------------------><-------------------------\\
  //---------------------><-------------------------\\
  return (
    <>
      <h1>Chai aur Qaisar</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      {/* addValue ko execute isliye nahi kar rahe hai ke click karne ke baad execute ho */}
      <br />
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
