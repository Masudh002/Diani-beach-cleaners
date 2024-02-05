import React, { useState } from 'react'
import { navLinks } from "../constants";
import dianiclean from "../assets/dianiclean.jpg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
const [active, setActive] = useState("Home");
const [toggle, setToggle] = useState(false);
  return (
    <nav className=' w-full py-6 flex justify-between items-center'>
        <img src={dianiclean} alt="pic" className='w-[100px] h-[100px]' />
        <ul className=' list-none sm:flex hidden flex-1 justify-end items-center'>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={` font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1? "mr-0" : "mr-4"}
                  ${active ===  nav.title ? "text-black":" text-gray-500"  }`} onClick={() => setActive(nav.title)}>
                   <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
        <div className=' sm:hidden flex flex-1 justify-end items-center'>
         <img src={toggle?close:menu } alt="icons" className=' w-[24px] h-[24px] object-contain' onClick={() => setToggle((prev) =>!prev)} />
          <div className={`${!toggle? "hidden": "flex"}  p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-slate-200`}>
           <ul className=' list-none flex justify-end items-start flex-1 flex-col'>
             {navLinks.map((nav, index) => (
                <li key={nav.id} className={` font-poppins font-medium cursor-pointer text-[14px] ${index === navLinks.length-1? "mr-0" : "mr-4"}
                  ${active ===  nav.title ? "text-white" : "text-black"}`} onClick={() => setActive(nav.title)}>
                   <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
             ))}
          </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
