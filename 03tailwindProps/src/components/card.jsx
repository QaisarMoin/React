import React from "react";

//Ab yaha se props shuru hota hai

//5) props ek object hai toh jo passed parameters hai unko props. props.  use karne se bheter hai ke card(props) par he destructure kardo like given below
//desturcture meaning hai ke ko parameters props ke andar hai unko directly use karlo niche wali line me method hai destructure karne ka in line no. 10

//Accha toh ab is username ko use kese karna hai kese jese jsx allow hai mtlb variable ke form me {username} aese is ka exapmle line no. 16 me hai

function Card({ username, btnText = "Default Me " }) {
  // final) ham yahi kuch default value bhi de sakte hai ta ke agar koi parameter pass karna bhul gaya hai toh kuch toh show kare

  // 2)hame nahi pata ke props kiya hota hai toh ham use console.log() karwa ke dekh lete hai
  //log me props EMPTY hai yaha se hao App.jsx mein
  //   console.log("Props", props);
  console.log(username);

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        {/* in the above statement i used the username in the variable form because we are in react */}
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
