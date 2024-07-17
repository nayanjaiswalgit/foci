import React from "react";

export default function profile({ params }: { params: { id: string } }) {
  return (
    <main className="flex w-screen h-screen bg-white py-2 gap-3 md:gap-40 justify-center">
      <h1 className="text-black text-3xl font-bold">Hi, <span className="font-semibold text-violet-700">{params.id}</span></h1>
    </main>
  );
}