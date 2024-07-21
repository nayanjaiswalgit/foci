"use client"
import React from "react";
import Link from "next/link";
import { TbSearch } from "react-icons/tb";
import { IoAddSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiDoorLockLine } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <main className="flex fixed bottom-0 z-50 w-screen bg-white py-2 gap-3 md:gap-40 justify-center">
      <Link href="/" className="text-black px-5 hover:text-violet-400 focus:text-violet-600 ">
        <RiHomeLine size={25} />
      </Link>
      <Link href="/upload" className="text-black px-5 hover:text-violet-400 focus:text-violet-600">
        <IoAddSharp size={25} />
      </Link>
      <Link href="/search" className="text-black px-5 hover:text-violet-400 focus:text-violet-600">
        <TbSearch size={25} />
      </Link>
      <Link href="/profile" className="text-black px-5 hover:text-violet-400 focus:text-violet-600">
        <ClerkLoading>
          <div className="w-8 h-8 border-2 border-dashed rounded-full animate-spin border-violet-600"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn><h1 className="text-sm"><UserButton/></h1></SignedIn>
          <SignedOut><Link href="/sign-in"><RiDoorLockLine size={25} /></Link></SignedOut>
        </ClerkLoaded>
      </Link>
    </main>
  );
}
