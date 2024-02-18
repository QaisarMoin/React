import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authSerivce from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import { Header, Footer } from "./components";

function App() {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // ye function sirf check kar raha hai ke user login hai ke nahi bas
    authSerivce
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloader(false));
  }, []);

  return !loader ? (
    <div
      className="min-h-screen flex flex-wrap
     content-between bg-gray-400
    "
    >
      <div className="w-full block">
        <Header />
        Hello
        {/* <Footer /> */}
      </div>
    </div>
  ) : null;
}

export default App;
