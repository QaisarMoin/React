import React from "react";

function Container({ children }) {
  return <div className="w-full max-w-7xl py-4 mx-auto">{children}</div>;
  //container kuch nahi bas ek wrapper hai jis ke andar har page ko render karwate hai jis se koi styling mein problem nahi aati hai
}

export default Container;
