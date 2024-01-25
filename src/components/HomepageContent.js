// components/HomePageContent.js
"use client";
import { signIn } from "next-auth/react";

export default function HomePageContent() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white px-10 py-20   border border-gray-300 rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Platform</h2>
        <p className="text-lg mb-8">
          Explore the amazing features and join our community today!
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => signIn("google")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Login
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
