"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

export default function profile() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  // if (isSignedIn) {
    return (
      <main className="flex w-screen h-screen bg-white py-2 gap-3 md:gap-40 justify-center bg-gray-200">
        <h1 className="text-black text-4xl font-bold">Hi, <span className="font-semibold text-violet-700">{user.firstName}</span></h1>
      </main>
    );
  // }

  // return <div>Not signed in</div>;  
}