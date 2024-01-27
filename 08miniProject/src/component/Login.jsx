import React, { useState, useContext } from "react";
//useContext is the hook by which we can access the variables of the context that i have maded
import UserContext from "../context/UserContext";

function Login() {
  //setUser method hame chiye UserContext mese ye likha hua hai line no.7 me
  const { setUser } = useContext(UserContext);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    //ab yah par hamne data send kar diye hai jo hamne context banaye hai usme
    //Ab yaha se jao profile.jsx mein
    // setUser mein hamne ek object pass kare hai toh jab ham value nakalenge tab User.username and User.password kar ke nakal na hoga
    //chacha user se is liye nikal na hoga kyo ke setUser user ko he toh update karta hai
  };
  return (
    <div>
      <h2>Login In</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
