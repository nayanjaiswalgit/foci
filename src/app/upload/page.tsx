import React from "react";

export default function upload() {
  return (
    <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div className="grid mx-auto my-auto col grid-cols-12 gap-3 rounded-lg z-0 shadow-2xl backdrop-blur-sm w-auto">
        <input
          type="file"
          placeholder="upload image, video, text, audio"
          className="block col-span-12 pl-3 py-2 bg-slate-300 m-3 text-black font-semibold rounded-lg"
        />
        <button className="col-span-12 py-2 m-3 bg-violet-700 text-white font-semibold rounded-lg">Upload</button>
      </div>
    </main>
  );
}
