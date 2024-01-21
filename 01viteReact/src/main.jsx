import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// parentesis () means that return it.
//ye anotherElement convert hote hai ek tree mai joki react convert karta hai
const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const anotherUser = "Mohd Qaisar Another User";
// Now i am making a new object with the help of React.createElement(
// type: directly ,
// object of properties directly ,
// direct Text,
// direct variable ko inject kardo
// )

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click Mohd Qaisar google",
  anotherUser
);

// 1) Ab yaha se jao App.jsx mai

//----------------------><-----------------------\\
ReactDOM.createRoot(document.getElementById("root")).render(
  //hamne apna banaya hua anotherElement run karwa hai :-)
  <App />
);
