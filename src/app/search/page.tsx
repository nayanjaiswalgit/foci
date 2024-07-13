import React from "react";
import Link from "next/link";
import Image from "next/image";
import Google from "../../../public/google.png";
import Facebook from "../../../public/facebook.png";
import Github from "../../../public/github.png";

export default function Signin() {
  return (
    <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-between p-24 bg-[url('/background.jpeg')] opacity-75">
      <div className="grid mx-auto my-auto col grid-cols-12 gap-3 rounded-lg z-0 shadow-2xl backdrop-blur-sm w-auto">
        <input
          type="text"
          placeholder="search account or post"
          className="col-span-12 pl-3 py-2 text-black rounded-md"
        />
      </div>
    </main>
  );
}
