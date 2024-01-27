import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/homes/Home.jsx";
import "./index.css";
import Layout from "./layout.jsx";
//4(b))Router banane ke 2 method hai and router {createBrowserRouter} is method se banate hai jo ke reactRouter ka he method hai
//4(c))createBrowserRouter ke andar array hota hai and array ke andar jitne chiye object hote hai agar nesting hai mtlb ek componenet ke andar aur bhaut se component hai to ussi object ke andar children bana do and children ke andar array bana kar object pass kardo{object mtlb pages}

//router ke andar ka mtlb hai ke sab ka parent hai layout.jsx and layout.jsx ke children hai home,About and etc files {path} ka mtlb hota hai ke url me kiya show karna hai and element ka mtlb hota hai ke uss url me kiya render karna hai agar file ke bhaut se children hai toh jesa router hamne niche banae hai wesa karo
//And accha home and About apne aap outlet ke andar insert ho jayenge hai na kamal

//-------------------------------><---------------------------\\

// (First method to make router )
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         // path:"" means default path of the website
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//-------------------------------><---------------------------\\

//(second Method to make Router )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
//uppar dekho ke path='/' wala parent element hai and all other uske chilren hai bhaut easy hai dekhna and read karna isko
//-------------------------------><---------------------------\\

// 4(d)) yaha se layout.jsx file me jaao

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 4(a)) RouterProvider is function which is present inthe react-router-dom Router yellow wala router is a name of real {router} made in the line no.8 we are exporting it in the line 12 .RouterProvider ko ek props ke jarurat hote hai tabhi worun karta hai and props ka naam hai blue wala router and parameter ka naam hai yellow wala router */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
