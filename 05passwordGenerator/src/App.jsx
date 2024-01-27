import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //---------------------------><------------------------\\

  // 1)
  // const passwordGenerator = useCallback(call_backFunction , [dependencies])
  //useCallback jitne bhi functions and method run hui hai unko ye chach memory me rakh leta hai toh jo change hota hai bas wahi change karta hai and jo change nahi hota hai unhe change nahi karta hai
  //useCallback hook ka kaam hota hai optimization na ke run karwana toh isko useEffect se compare mat karna wo run karwane ke liye responsible hota hai
  // And ye sab isliye hota hai kiyo ke react khud UI controll karta hai
  //And dependencies ko cach memory me save kare ke raho

  //---------------------------><------------------------\\

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    let nums = "0123456789";
    let specialChar = "!#$%&*+-/<=>?@[]_{}~";

    if (numberAllowed) str += nums;
    // or we can this like if(numberAllowed == true) also both having the same meaning
    if (charAllowed) str += specialChar;

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //ham aese he password generator ko call nahi kar sakte hai kiyo ke ye ek useCallback hook hai iske liye kuch alag karna hoga jo ke niche diya hua hai

  //---------------------------><------------------------\\
  // 2)
  //ham chate ahi ke jab bhi number,special charater allowed ho toh password generate ho
  //mtlb hame aesa function chiye ke wo baar baar change ho jab ham koi setting badle. Uske liye ham (useEffect Hook) ka use karte hai
  //Accha useEffect(call_backFunction,[dependencies]) ke andar bhi do chise lagti hai. dependencies mtlb jab dependencies change honge tab ye phir se run karega
  //jab page refresh hota hai toh useEffect automatic run karta hai by default

  //---------------------------><------------------------\\

  useEffect(() => {
    //ab ham iske andar passwordGenerator ko run karwa sakte hai
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  //---------------------------><------------------------\\
  //Using useRef() hook
  //i am putting default value is null
  const getRefrence = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    //But abhi tak hamne toh getRefrence ka use toh kiye he nahi iska use properties ko janne ke liye ya phir range define karne ke liye use kiya jata hai

    getRefrence.current?.select();
    //{current?.select()} iska mtlb hai ke getRefrence ki agar koi current value hai tab use select kar do only select

    getRefrence.current?.setSelectionRange(0, 100);
    // getRefrence.current?.setSelectionRange(0, 3); mtlb hai ke sirf (0,x) x character he select karna hai

    //Accha ab ham copy to clipboard kese karte hai
    //iska mtlb hai ke clipboard ke andar password ko save kar do
    window.navigator.clipboard.writeText(password);
    // alert("Copied");
  }, [password]);

  const regeneratePassword = useCallback(() => {
    passwordGenerator();
  }, [password]);

  return (
    <>
      <h1 className=" text-5xl text-center my-6"> Password Generator </h1>

      <div className=" w-1/2 mx-auto bg-slate-800 px-4 rounded-lg py-2 drop-shadow-2xl">
        <div
          className=" overflow-hidden flex
          m-4 justify-center items-center flex-wrap "
        >
          <input
            className="text-black w-full px-3 py-3 
            text-center text-xl border-none 
            rounded-xl outline-0"
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={getRefrence}
          ></input>
          {/* ab ham chate hai ke copy button me click karne se jitna portion copy ho raha hai wo select ho jay is ke liye ek naa Hook aata hai {useRef(defaultValue)} hook iska mtbl jab hame kesi bhi chiez ka refrence lena hota hai tab ham iska use karte hai.  ref={getRefrence} giving refrence to the useRef() Hook from the input*/}
          <button
            className=" bg-orange-600 rounded-xl 
            hover:bg-lime-600 outline-0 p-3 m-2"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
          <button
            className=" bg-orange-600 rounded-xl 
            hover:bg-lime-600 outline-0 p-3 m-2"
            onClick={regeneratePassword}
          >
            Regenerate
          </button>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-wrap p-5 mx-6">
            <input
              className=" cursor-pointer w-52 "
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              // {e} wahi event hai jo hamne JS me pdeh tey and {.target.value } means that jaha par abhi slider hai wo value set kar do setlength me
            />
            <label className=" ml-1">Length : {length}</label>
          </div>

          <div
            className="flex gap-3 items-center 
          flex-wrap "
          >
            <input
              className=" w-4 h-5"
              type={"checkbox"}
              defaultChecked={numberAllowed}
              id="numberId"
              onChange={() => {
                // aesa hamne islye kare agar ham directly setNumberAllowed((prev) => !prev); likh dete toh wo wahi execute ho jata na ke click karne ke baad.
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberId">Numbers</label>

            <input
              type={"checkbox"}
              defaultChecked={charAllowed}
              id="charId"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charId">SpecialChar</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
