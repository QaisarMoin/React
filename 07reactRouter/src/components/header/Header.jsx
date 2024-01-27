import React from "react";
//in line 3 i am importing Link and NavLink from the router
import { Link, NavLink } from "react-router-dom";
// 3)After reading this goto main.jsx
//Link is similar to the <a> tag(a dom ko phir se repaint karta hai means refresh the page) in the HTML but in react there is no concept of refreshing the page in the react so we use Link tag and NavLink tag in the react which imports from the router
//Link provides a basic link to any URL, while NavLink offers additional capabilities that can enhance your user experience.
//NavLink gives us the more functionality then the Link tag
// we can see Link tag and NavLink tag in line no. 21 and 40
//in <a> tag we use herf="" BUT in the Link tag we use to=""
//MORE COMMENTS ON LINE NO.43
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  // agar apan tailwind aese likh te hai call back function ke taricek se likh te hai toh hame kuch object ka direct access milta hai ike isActive,isPending and etc. isActive bata hai ke abhi user yus page par hai ke nahi. {?}means that user active ahai ke nahi agra hai toh kuch karo and nahi hai toh kuch karo likhne ka context dekho ab ${}---> inserting variable ${ isActive?"agar Active hai toh":"agar Active nahi toh"}
                  to="/"
                  className={({ isActive }) =>
                    //   yaha par ham ${} variable aese isliye inject kar pa rahe hai kiyo ke keh `` ke andar hai
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  // to="about" means that jo hamne router banaey hai main.jsx mein jo url diye hai About.jsx <About /> file ko uska refrence pass kar rahe hai
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="about" means that jo hamne router banaey hai main.jsx mein jo url diye hai Contact.jsx <Contact /> file ko uska refrence pass kar rahe hai
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                    ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
