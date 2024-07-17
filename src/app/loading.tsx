import React from "react";

export default function upload() {
  return (
    // <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
    <div className='flex space-x-2 justify-center items-center bg-white h-screen '>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-violet-700 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
    </div>
    // </main>
  );
}
