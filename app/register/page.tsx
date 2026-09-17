
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      phoneNumber
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg border p-6">
        <h1 className="text-3xl font-bold">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text" 
            className="focus:border-blue-500 focus:bg-yellow-200 focus:text-black-500 focus:outline-none "
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

            <Input
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />


          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        <p className="text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
