import React from "react";

export default function Signin() {
  return (
    <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div className="grid mx-auto my-auto col grid-cols-12 gap-3 rounded-lg z-0 shadow-2xl backdrop-blur-sm w-auto">
        <input
          type="text"
          placeholder="search account or post"
          className="col-span-12 pl-3 py-2 text-black font-semibold rounded-lg"
        />
      </div>
    </main>
  );
}
