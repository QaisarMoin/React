import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  //JSX mein har tag closing hona chiye ex:- <img src = '' > in this tag there is no closing tag so we close it by this <img src = '' />

  // props banata hai componenet like card ko reusible by saveing in the other file iske liye hamne ek new folder banaey components jis me ek file card return karte hai

  // 3)
  let myObj = {
    name: "Meer Asharf",
    age: 21,
  };

  let myArr = [1, 2, 3, 4];

  //4) Now from here go to card.jsx to how to use all the passed parameters in the card
  return (
    <>
      <p className="bg-green-400 text-5xl text-black p-4 rounded-3xl my-3">
        Tailwind Test
      </p>

      {/* -----------------------><--------------------- */}
      {/* -----------------------><--------------------- */}

      {/* Calling card from the component Folder to the UI and agar ham dono card aese le kar aaye to information toh same he rahe gi but ham chate hai ke apnw hissab se naam and other properties ko change kare toh us keliye hame use karna ho ga {props} ka AND AB JAO CARD.JSX mein */}
      {/* <Card />
      <Card /> */}

      {/* 2) Now from here we are passing some parameters to the props a)passing simple parametre b) passing an Object c) Passing an Array.  Array and Pbject ko ek variable  means {} isme pass karna padhta hai  */}

      <Card
        username="Mohd Qaisar Moin"
        MyObj={myObj}
        MyArr={myArr}
        btnText="click Qaisar"
      />
      <Card username="Mohd Meer Ashraf" btnText="click Meer" />
      {/* bas yaha hame ab pass karna hai hamne card.jsx mein variable inject karde ye hai */}

      <Card username="Default Btn Text" />
    </>
  );
}

export default App;
