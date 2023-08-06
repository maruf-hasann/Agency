import Link from "next/link";
import React from "react";
import logo from "@/image/logo.png"
const Navbar = () => {
  const navContent = (
    <>
      <Link href="/">Home</Link>
      <Link href="/">Services</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Client</Link>
      <Link href="/">Blogs</Link>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-xl w-52"
          >
            {navContent}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-2xl font-black">
          Facial
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 font-semibold text-base">
          {navContent}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/">
          <button className="btn_primary">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
