"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { signIn } from "next-auth/react";

export default function page() {
  return (
    <ProtectedRoute>
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 mt-5 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <form
          // onSubmit={handleFormSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                //   value={email}
                //   onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                //   value={password}
                //   onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
            >
              Login with Email
            </button>
          </form>
          <button
            onClick={() => signIn("google")}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Login with Google
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
