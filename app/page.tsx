// "use client";

import { HelpCircleIcon } from "lucide-react";

// import TrekCard from "@/components/TrekCard";

// export default function Page() {
//   return (
//     <TrekCard
//       title="Everest Base Camp"
//       country="Nepal"
//       duration="14 Days"
//       route="Kathmandu to Lukla"
//       rating={4.8}
//       reviewCount={120}
//       happyTrekkers="1.2k+"
//       bestTime="Mar - May, Sep - Nov"
//       stops={[
//         { name: "Kathmandu", altitude: 1400 },
//         { name: "Lukla", altitude: 2860 },
//         { name: "Phakding", altitude: 2610 },
//         { name: "Namche Bazaar", altitude: 3440, highlighted: true },
//         { name: "Tengboche", altitude: 3860 },
//         { name: "Lobuche", altitude: 4940 },
//         { name: "Gorakshep", altitude: 5164 },
//         { name: "Everest Base Camp", altitude: 5364, highlighted: true },
//       ]}
//       weather={{ condition: "Partly Cloudy", feelsLike: 10 }}
//       onBookNow={() => alert("Booking clicked")}
//     />
//   );
// }






















// Basic Types
// Primitive Types: number, string, boolean
// ENums 

// export default function Home() {
//   let studentName: string = "Jyoti";
//   let age: number = 22;
//   let isStudent: boolean = true;

//   return (
//     <div>
//       <h1>{studentName}</h1>
//       <p>Age: {age}</p>
//       <p>Student: {isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }
// enum user{
//   admin = "admin",
//   user = "user",
//   guest = "guest"
// }

// enum statusCodes{
//   abandoned = "abandoned",
//   inProgress = "inProgress",
//   completed = "completed" 
// }

//  
// export default function Home() {
//  let names: string[] = ["Jyoti", "Sita", "Gita"];
//  let marks: number[] = [80, 75, 90, 85];
//   let city: string = "Kathmandu";
//   let province: string = "Bagmati";
//   let salary : number = 50000;
//   let isMarried: boolean = false;
//   let status: boolean[] = [true,false,true];
// return (
//   <div>
//     {names.map((name) => (
//         <p key={name}>{name}</p>
//       ))}
//     {marks.map((mark) => (
//         <p key={mark}>Mark: {mark}</p>
//       ))}
//     <p>City: {city}</p>
//     <p>Province: {province}</p>
//     <p>Salary: {salary}</p>
//     <p>Married: {isMarried ? "Yes" : "No"}</p>
//     {status.map((s, index) => (
//   <p key={index}>
//     Status: {s ? "Active" : "Inactive"}
//   </p>
// ))}
//   </div>  
// );
// }

// 
// export default function Home() {
//   const students = [
//     {
//       id: 1,
//       name: "Jyoti",
//       age: 22,
//       course: "BCA",
//       email: "jyoti@gmail.com"
//     },
//     {
//       id: 2,
//       name: "Sita",
//       age: 21,
//       course: "BCA",
//       email: "sita@gmail.com"
//     },
//     {
//       id: 3,
//       name: "Gita",
//       age: 23,
//       course: "BCA",
//       email: "gita@gmail.com"
//     },
//     {
//       id: 4,
//       name: "Rita",
//       age: 22,
//       course: "CSIT",
//       email: "rita@gmail.com"
//     }
//   ];

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow bg-yellow-200">
//       <h1 className="text-2xl font-bold text-center mb-4">Student List</h1>

//       {students.map((student) => (
//         <div key={student.id} className="mb-4 mx-auto font-bold text-center text-red-500" >
//           <p>ID: {student.id}</p>
//           <p>Name: {student.name}</p>
//           <p>Age: {student.age}</p>
//           <p>Course: {student.course}</p>
//           <p>Email: {student.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// type Student = {
//   id: number;
//   name: string;
//   age: number;
//   course: string;
//   email: string;
// };

// export default function Home() {
//   const students: Student[] = [
//     {
//       id: 1,
//       name: "Jyoti",
//       age: 22,
//       course: "BCA",
//       email: "jyoti@gmail.com",
//     },
//     {
//       id: 2,
//       name: "Sita",
//       age: 21,
//       course: "BCA",
//       email: "sita@gmail.com",
//     },
//     {
//       id: 3,
//       name: "Gita",
//       age: 23,
//       course: "BCA",
//       email: "gita@gmail.com",
//     },
//   ];

//   return (
//    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow bg-yellow-200">
//       <h1 className="text-3xl font-bold text-center" >Student List</h1>

//       {students.map((student) => (
//         <div key={student.id}  className="mb-4 mx-auto font-bold text-center text-red-500 hover:text-blue-500">
//           <p>ID: {student.id}</p>
//           <p>Name: {student.name}</p>
//           <p>Age: {student.age}</p>
//           <p>Course: {student.course}</p>
//           <p>Email: {student.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }


// type Student = {
//   id: number;
//   name: string;
//   age: number;
//   course: string;
//   email: string;

//   address: {
//     city: string;
//     province: string;
//     country: string;
//   };
// };

// export default function Home() {
//   const students: Student[] = [
//     {
//       id: 1,
//       name: "Jyoti",
//       age: 22,
//       course: "BCA",
//       email: "jyoti@gmail.com",

//       address: {
//         city: "Kathmandu",
//         province: "Bagmati",
//         country: "Nepal",
//       },
//     },

//     {
//       id: 2,
//       name: "Sita",
//       age: 21,
//       course: "BCA",
//       email: "sita@gmail.com",

//       address: {
//         city: "Pokhara",
//         province: "Gandaki",
//         country: "Nepal",
//       },
//     },

//     {
//       id: 3,
//       name: "Gita",
//       age: 23,
//       course: "BIM",
//       email: "gita@gmail.com",

//       address: {
//         city: "Bhaktapur",
//         province: "Bagmati",
//         country: "Nepal",
//       },
//     },
//   ];

//   return (
//     <div className="min-h-screen max-w-md mx-auto mt-8 p-4 border rounded shadow bg-yellow-200 overflow-y-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Student List
//       </h1>

//       {students.map((student) => (
//         <div
//           key={student.id}
//           className="mb-4 p-4 bg-white rounded shadow"
//         >
//           <p>ID: {student.id}</p>
//           <p>Name: {student.name}</p>
//           <p>Age: {student.age}</p>
//           <p>Course: {student.course}</p>
//           <p>Email: {student.email}</p>

//           <h2 className="font-bold mt-3">Address</h2>

//           <p>City: {student.address.city}</p>
//           <p>Province: {student.address.province}</p>
//           <p>Country: {student.address.country}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


interface student {
  id: number;
  name: string;
  age: number;
  course: string;
  email: string;

  address: {
    city: string;
    province: string;
    country: string;
  };
}

export default function Home() {
  const students: student[] = [
    {
      id: 1,
      name: "Jyoti",
      age: 22,
      course: "BCA",
      email: "jyoti@gmail.com",
      address: {
        city: "Kathmandu",
        province: "Bagmati",
        country: "Nepal",
      },
    },

    {
      id: 2,
      name: "Sita",
      age: 21,
      course: "BCA",
      email: "sita@gmail.com",
      address: {
        city: "Pokhara",
        province: "Gandaki",
        country: "Nepal",
      },
    },
  ];

  return (
    <div className="min-h-screen max-w-md mx-auto mt-8 p-4 border rounded shadow bg-yellow-200 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Student Information
      </h1>

      {students.map((student) => (
        <div key={student.id} className="mb-4 p-4 bg-white rounded shadow">
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <p>Email: {student.email}</p>

          <h2>Address</h2>

          <p>City: {student.address.city}</p>
          <p>Province: {student.address.province}</p>
          <p>Country: {student.address.country}</p>
        </div>
      ))}
    </div>
  );
}