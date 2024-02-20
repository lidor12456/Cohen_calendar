// components/Navbar.js
"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const status = useSession();
  return (
    <nav className="bg-[#e5e7eb] shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Calendar
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul
          className={`md:flex flex-col md:flex-row md:items-center md:space-x-2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/personsList"
              className="block md:inline-block text-black md:text-white text-center md:bg-gray-500  py-2.5 px-4 border border-black md:border-none rounded-lg  mr-4 mb-2 md:mb-0 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Your List
            </Link>
          </li>
          <li>
            <Link
              href="/addnew"
              className="block md:inline-block text-black md:text-white text-center md:bg-gray-500  py-2.5 px-4 border border-black md:border-none rounded-lg  mr-4 mb-2 md:mb-0 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Add New Person
            </Link>
          </li>
          <li>
            {status.status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="block md:inline-block bg-red-500 text-white py-2 px-4 rounded-lg mr-4 mb-2 md:mb-0 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="block md:inline-block bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 mb-2 md:mb-0 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </div>
      {status.status === "authenticated" ? (
        <span className="text-gray-600">{`Hello ${status.data?.user?.name}`}</span>
      ) : (
        <span className="text-gray-600">Please Sign In</span>
      )}
    </nav>
  );
};

export default Navbar;
