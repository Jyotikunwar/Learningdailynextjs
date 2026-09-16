

import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-3xl  font-bold ">Welcome to the Home Page</h1>
            <p className="text">Please login or register to continue.</p>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline">
                <Link href="/register">Register</Link>
              </Button>
          
        </div>
    );
}
