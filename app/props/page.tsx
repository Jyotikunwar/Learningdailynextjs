interface Student {
  id: number | string;
  name: string;
  age: number;
  course: string;
  email?: string;
}

interface StudentCardProps {
  student: Student;
}

function StudentCard(props: StudentCardProps) {
  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="text-xl font-bold"> {props.student.name}</h2>

      <p>ID: {props.student.id}</p>

      <p>Age: {props.student.age}</p>

      <p>Course: {props.student.course}</p>

      <p>Email: {props.student.email}</p>
    </div>
  );
}

export default function Home() {
  const student1: Student = {
  id: 1,
  name: "Jyoti",
  age: 22,
  course: "BCA",
  email: "jyoti@gmail.com",
};

const student2: Student = {
  id: 2,
  name: "Sita",
  age: 21,
  course: "BIM",
  email: "sita@gmail.com",
};
        
  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-300 text-blue-900">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Student
      </h1>

      <StudentCard student={student1} />
      <StudentCard student={student2} />
    </div>
  );
}