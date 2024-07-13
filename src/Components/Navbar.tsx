import React from "react";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";

export default function Navbar() {
  return (
    <main className="flex w-full bg-white py-2 gap-3 justify-center">
      <Link href="/" className="text-black px-5">
        <GrHomeRounded />
      </Link>
      <Link href="/" className="text-black px-5">
        <GrHomeRounded />
      </Link>
      <Link href="/" className="text-black px-5">
        <GrHomeRounded />
      </Link>
      <Link href="/" className="text-black px-5">
        <GrHomeRounded />
      </Link>
    </main>
  );
}
