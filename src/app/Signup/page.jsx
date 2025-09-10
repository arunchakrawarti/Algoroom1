"use client";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>
        <p className="text-gray-500 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

       
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <input
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <button className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
}
