import React from "react";
import Link from "next/link";

export default function Signup() {
    return (
        <main className="flex w-screen h-screen min-h-screen  flex-col items-center justify-between p-24  bg-[url('/backg.jpeg')] opacity-80">
          <div className="grid mx-auto my-auto col grid-cols-12 gap-3">
            <Link className="text-white bg-red-700 rounded-full px-5 py-3 col-span-12" href="#">Continue with email</Link>
            <Link className="text-black bg-white rounded-full px-5 py-3 col-span-12" href="#">Continue with Google</Link>
            <p className="col-span-12 text-sm text-center pt-4">Already a member? <Link className="hover:font-semibold" href="/signin"> Sign in</Link></p> 
          </div>
        </main>
      );
  } 