// components/Navbar.js
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const status = useSession();
  return (
    <nav className="bg-[#e5e7eb] shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Calendar
        </Link>
        {status === "authenticated" ? (
          <span>Hello User</span>
        ) : (
          <span>Please signin</span>
        )}
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="text-white hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
