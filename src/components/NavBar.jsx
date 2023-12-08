import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">
        <Link href="/">SolsticeLend</Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4">
          <Link href="/buy-lend">Buy/Lend</Link>
        </li>
        <li className="p-4">
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed m-3 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">Data.</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link href="/buy-lend">Buy/Lend</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
