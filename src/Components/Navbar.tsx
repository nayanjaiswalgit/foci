import React from "react";
import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { IoAddSharp } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <main className="flex fixed bottom-0 left-0 z-50 w-screen bg-white py-2 gap-3 md:gap-40 justify-center">
      <Link href="/" className="text-black px-5 hover:text-violet-500">
        <RiHomeLine />
      </Link>
      <Link href="/upload" className="text-black px-5 hover:text-violet-500">
        <IoAddSharp />
      </Link>
      <Link href="/search" className="text-black px-5 hover:text-violet-500">
        <TbSearch />
      </Link>
      <Link href="/profile" className="text-black px-5 hover:text-violet-500">
        <RiContactsLine />
      </Link>
    </main>
  );
}
