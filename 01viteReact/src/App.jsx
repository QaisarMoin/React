function App() {
  const username = "Mohd Qaisar Moin";
  //jese Js ke string me ${} ham variable insert kar dete teh ussi tarah ham react me {} in ke andar variable ko insert kar dete hai
  //But in js ham ${} is ke andar bhaut sare methods like .length ....  insert kardete teh
  //Lekin ham react me aesa nahi kar sakte hai {} ye sidha outcome print karta hai jo bhi evaluate karna hai return ke phele karo

  // 2) Ab yaha se jao main.jsx mai

  return (
    <>
      <h1>What are you doing {username}</h1>
      <p>Hello</p>
    </>
  );
}

export default App;
