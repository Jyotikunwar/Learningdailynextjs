
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white  dark:bg-gray-800 p-6">
      <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
        <h1 className="text-3xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email" 
            className="
    bg-white
    text-black
    dark:bg-gray-800
    dark:text-white
    dark:border-gray-700
    focus:outline-none
    focus:ring-2
    focus:ring-green-500
  "
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <Input
            type="password"
            className="focus:border-blue-500 focus:bg-yellow-200 focus:text-black-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
    
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}