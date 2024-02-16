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
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-3">
        <Link href="/" className="text-white text-2xl font-bold">
          Calendar
        </Link>
        {status.status === "authenticated" ? (
          <span className="text-gray-600">{`Hello ${status.data?.user?.name}`}</span>
        ) : (
          <span className="text-gray-600">Please Sign In</span>
        )}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-1 md:space-x-4">
          <li>
            <Link
              href="/personsList"
              className="bg-gray-500 text-white py-2.5 px-4 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Your List
            </Link>
          </li>
          <li>
            <Link
              href="/addnew"
              className="bg-gray-500 text-white py-2.5 px-4 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Add New Person
            </Link>
          </li>
          <li>
            {status.status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
