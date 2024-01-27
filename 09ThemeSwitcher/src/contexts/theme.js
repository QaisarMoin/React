//----------------->Starting<-------------------\\

// 1) mini project me hamne kiye teh ke userContext.js file alag banakar phir UserContextProvider.jsx file mein variable introduce kiye teh
//Iss baar ham dono file ka kaam issi file mein kar denge

import { createContext, useContext } from "react";

//2)pechli baar hamne aese he toh export kiye teh miniproject But hamne value UserContextProvider.jsx me define kare teh But Iss bar ham ye kaam yahi karenge
//CreateContext ke andar ek Default value dalli ja sakti hai
export const themeContext = createContext({
  themeMode: "light",
  ligthTheme: () => {},
  darkTheme: () => {},
  //iss me ham export kar rahe hai ek object ta ke jab ham iss ko export kar ke dusri file mein use kare tab hame by Default 3 chize mille theme,lightTheme and darkTheme phir ham in ko use kar sakte hai
});

//===========================><======================\\

//jo kaam hamne mini project mein dusre file mein kare teh wohw kaam ham yahi kar rahe hai (themeProvider bana kar yahi par) ab simply App.jsx mein sabhi ko iss se raap kardo
export const ThemeProvider = themeContext.Provider;

//===========================><======================\\

//Makeing Custom Hooks
// import React, { useState, useContext } from "react";
// import UserContext from "../context/UserContext";
//kiyo ke hame baar baar aesa nahi likhna padeh jese hamne mini project mein baar baar likhe teh

export default function useTheme() {
  return useContext(themeContext);
}
