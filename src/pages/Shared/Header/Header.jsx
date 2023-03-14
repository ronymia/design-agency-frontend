import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

import logo from '../../../assets/logos/logo.png';

export default function Header() {
     const [navToggle, setNavToggle] = useState(false);

     const menuItem =
          <>
               <li>
                    <NavLink to={"/"}
                         className={({ isActive }) => `${isActive && "border-b-[3px]  border-secondary  font-semibold"} hover:border-b-[3px]  border-secondary transition-all capitalize`}
                    >
                         Home</NavLink>
               </li>
               <li>
                    <NavLink to={"/ourPortfolio"}
                         className={({ isActive }) => `${isActive && "border-b-[3px]  border-secondary  font-semibold"} hover:border-b-[3px]  border-secondary transition-all capitalize`}
                    >
                         Our Portifolio</NavLink>
               </li>
               <li>
                    <NavLink to={"/ourTeam"}
                         className={({ isActive }) => `${isActive && "border-b-[3px]  border-secondary  font-semibold"} hover:border-b-[3px]  border-secondary transition-all capitalize`}
                    >
                         Our Team</NavLink>
               </li>
               <li>
                    <NavLink to={"/contact"}
                         className={({ isActive }) => `${isActive && "border-b-[3px]  border-secondary  font-semibold"} hover:border-b-[3px]  border-secondary transition-all capitalize`}
                    >
                         Contact us</NavLink>
               </li>
               <li className="px-[35px] py-[10px] bg-primary text-white rounded-[5px] cursor-pointer">
                    <Link>Login</Link>
               </li>
          </>;


     return (
          <header className="w-full px-4 md:px-24 py-5 fixed top-0 z-50">
               <nav className="flex items-center justify-between">
                    <div className="">
                         <img src={logo}
                              className="w-[140px] h-[40px]"
                              alt="header-logo" />
                    </div>

                    {/* desktop navbar */}
                    <ul className="hidden md:inline-flex gap-5 items-center text-gray text-base font-medium">
                         {menuItem}
                    </ul>

                    {/* mobile navbar 768 */}
                    <div className="md:hidden relative">
                         <FiMenu size={30} className="cursor-pointer z-[999]"
                              onClick={() => setNavToggle(!navToggle)}
                         />

                         <ul className={`flex flex-col gap-3 items-center text-gray font-medium h-full 
                         bg-white w-[250px] fixed top-0 pt-10 z-[-1] transition-all 
                         ${navToggle ? "nav-shadow right-[0%]" : "-right-[100%]"}`}>
                              {menuItem}
                         </ul>
                    </div>
               </nav>
          </header>
     );
}
