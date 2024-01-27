import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function Layout() {
  // 4(d))Ham chate hai ke header and footer change naho and wo apni jigha bane rahe toh use ke liye ham use karte hai {outlet} ka mtlb niche dekho header and footer apni jigha toh fix hai and jaha par outle likha hai waha par ham new pages insert kar sakte hai jisse header and footer change nahi hongey and page bhi badalta jayga

  //4(d(1))) ab yah hamne outlet toh use karliya hai but jo main.jsx ke andar router banaey hai usko kese pata ke outlet kis file me hai toh uske liye hamme phle layout file render karwan padega fir jo bhi element ko insert karwana hai usko wo automatic insert kawa dega
  //

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
