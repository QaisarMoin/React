import React, { useContext } from "react";
import UserContext from "../context/UserContext";
//ab yaha par ham bheje hua time username and password ko process karenge zahir se baat hai UserContext me se he le kar aayenge kiyo ke userContext me he toh bheje hai

function Profile() {
  const { user } = useContext(UserContext);
  //   return <div></div>;
  // yaha par return nahi Conditional Return kr rahe hai mtlb agar khuch nahi hai toh kiya return karo nad jab kuch ho tab kiya return karo Simple as that

  if (!user) return <div>Enter Your UserName</div>;

  return <div> Welcome {user.username}</div>;
  //   return <div> `Welcome {user.password}`</div>;
  //ham password bhi extract kar sakte hai kiyo ke hamne Login.jsx mein ek object ko bheje teh
}

export default Profile;
