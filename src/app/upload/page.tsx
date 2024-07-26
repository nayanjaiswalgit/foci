import React from "react";

export default function upload() {
  return (
    <main className="flex w-screen h-screen min-h-screen flex-col items-center justify-center p-24 bg-gray-200">
      <div className="grid mx-auto my-auto col grid-cols-12 gap-3 rounded-lg z-0 shadow-2xl backdrop-blur-sm w-auto">
      <textarea cols={12} rows={4} className="col-span-12 block w-full text-sm rounded-lg border border-gray-300 p-5 mx-2 text-violet-900" placeholder="What's in your mind..."></textarea>
        <input
          type="file"
          placeholder="upload image, video, text, audio"
          className="block col-span-12 pl-3 py-2 bg-slate-300 mx-3 text-black font-semibold rounded-lg"
        />
        <button className="col-span-12 py-2 m-3 bg-violet-700 text-white font-semibold rounded-lg">Upload</button>
      </div>
      <h1 className="text-3xl font-bold my-2">Suggesstions : </h1>
      <div className="grid grid-cols-12 gap-4 my-4 overflow-auto h-96 w-full">
        <div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>New Apple Immersive Video series, films, concerts, and more set to premiere on Apple Vision Pro beginning July 18</h1>
        </div>
        <div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>Apple introduces HomePod mini in midnight</h1>
        </div>
        <div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>Three new games, including Temple Run: Legends and Vampire Survivors+, come to Apple Arcade in August</h1>
        </div>
        <div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>New versions of Final Cut Pro for iPad and Mac available today</h1>
        </div>
        <div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>Apple extends its privacy leadership with new updates across its platforms</h1>
        </div><div className="col-span-12 md:col-span-4 rounded-md shadow-md bg-white px-5 py-2">
          <h1>Introducing Apple Intelligence, the personal intelligence system that puts powerful generative models at the core of iPhone, iPad, and Mac</h1>
        </div>
      </div>
    </main>
  );
}
