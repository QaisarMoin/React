//STARTING FROM HERE
// 1)Context Apan jitne chiye bana sakte hai jese login , card , shopping ka nad many more

import React from "react";

//no from here we are learning that how to make context
// we make context with the React.creatContext() yes it the method and can be stored in the variable

const UserContext = React.createContext();

export default UserContext;

// 2)context hame provider deta hai kiyo ke context hame variable he toh provied karta hai
//is UserContext se ham sabhi ko rap kardenge taa ke baad me ham un me se kesi bhi variable ko kabhi bhi call ya change kar sake
//Example is given below

{
  /* <UserContext>
    <div />
    <Login/>
    <Card/>
    <p></p>....etc
 </UserContext> */
} // like this

// 3) ab ye just uppar hamne UserContext me variable toh insert kar diye ab in variable ka access paane ke liye hamne context ek provider deta hai take hame in varible ya methods ko access kar sake

//ab khuch method rap karne ke liye jesa line No. 17 me diya hai hamne ek UserContextProvider.jsx bana e hai
//UserContextProvider.jsx PAR JAO
