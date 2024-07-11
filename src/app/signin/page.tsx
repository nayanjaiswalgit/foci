import React from "react";
import Link from "next/link";

export default function Signin() {
    return (
      <main className="flex w-screen h-screen min-h-screen  flex-col items-center justify-between p-24  bg-[url('/backg.jpeg')] opacity-80">
        <div className="grid mx-auto my-auto col grid-cols-12 gap-3">
          <input type="email" placeholder="email" className="text-black bg-white rounded-full px-5 py-2 col-span-12"/>
          <input type="password" placeholder="password" className="text-black bg-white rounded-full px-5 py-2 col-span-12"/>
          <button className="text-white bg-red-700 rounded-full px-3 py-3 col-span-12">Signin</button> 
        </div>
      </main>
    );
}