import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';

export default function Header() {
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
          </>
     return (
          <header className="w-full px-24 py-5">
               <nav className="flex items-center justify-between">
                    <div className="">
                         <img src={logo}
                              className="w-[140px] h-[40px]"
                              alt="header-logo" />
                    </div>
                    <ul className="inline-flex gap-5 items-center text-gray text-base font-medium">
                         {menuItem}
                    </ul>
               </nav>
          </header>
     );
}
