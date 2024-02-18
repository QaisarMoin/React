import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    //appwrite ka har function mostly promise return karta hai
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200
         hover:bg-blue-100 rounded-full
  "
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
