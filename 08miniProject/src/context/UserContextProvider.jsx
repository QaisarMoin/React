import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    // UserContext.Provider means that ab userContext user and SetUser ko provide karta hai dusri files ke iye
    <UserContext.Provider value={{ user, setUser }}>
      {/* value ke andar ham yellow{} means hai ke ham ek object return kar rahe hai us object ke andar ham kitne bhi parameters ko pass kar sake te hai 
  ==============================><==============================
  ye value jo hai ye value ko ham dusre function ke liye bhej rahe hai take wo inn user and setUser ko use kar sake (access kar sake)
  But 
  children ko ham return kar rahe hai UserContext.Provider me rap karke kiyo ke children ko kahi se bhi call kar sake 
  */}
      {children}
      //ye children he App.jsx hai smajh me aaya kya
    </UserContext.Provider>
  );
  // return means hai jo bhi object aa raha hai usse chup chaap jesa aayaa hai wesa he return kardo
};

export default UserContextProvider;
