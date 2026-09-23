"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [course, setCourse] = useState<string>("");

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-yellow-400 w-full max-w-md p-6 rounded-lg">

        <h1 className="font-bold text-center text-2xl mb-5">
          STUDENT INFORMATION
        </h1>

        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-2 mb-3 w-full"
        />

        {/* Age Input */}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter your age"
          className="border p-2 mb-3 w-full"
        />

        {/* Course Input */}
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter your course"
          className="border p-2 mb-4 w-full"
        />

        {/* Student Information */}
        <h2 className="text-xl font-bold mb-2">
          Hello {name}
        </h2>

        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Status: {isActive ? "Active" : "Inactive"}</p>
        <p>Course: {course}</p>

        {/* Buttons */}
        <div className="bg-gray-300 mt-6 p-4 border rounded-lg flex flex-wrap gap-2">

          <button
            onClick={() => setName("Hira")}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Change Name
          </button>

          <button
            onClick={() => setAge(24)}
            className="bg-green-500 text-white px-3 py-2 rounded"
          >
            Change Age
          </button>

          <button
            onClick={() => setIsActive(false)}
            className="bg-red-500 text-white px-3 py-2 rounded"
          >
            Deactivate
          </button>

          <button
            onClick={() => setCourse("BBA")}
            className="bg-purple-500 text-white px-3 py-2 rounded"
          >
            Update Course
          </button>

        </div>

      </div>

    </div>
  );
}