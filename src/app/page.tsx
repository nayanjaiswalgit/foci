import Image from "next/image";
import Link from "next/link";
import Github from "../../public/background.jpeg"
import Facebook from "../../public/backg.jpeg"
import Back from "../../public/back2.jpg"
import github from "../../public/github.png"
import { FcLike } from "react-icons/fc";
import { FaRegComments } from "react-icons/fa6";
import { PiShareThin } from "react-icons/pi";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <Link href="/search" className="bg-white text-black px-2 rounded-lg items-center">
        search
      </Link>
      {/* POST */}
      <div className="grid grid-cols-12 justify-center">
        <div className="col-span-12 md:col-span-6 shadow bg-transparent p-3 rounded-lg m-5">
            <div className="flex justify-center my-2">
              <Image src={github} width={30} height={30}/>
              <p className="inline-block align-bottom text-sm font-bold text-black">Ayush Sonone</p>
            </div>
            <Image src={Github} className="items-center rounded-2xl shadow-lg"/>
            <h1 className="py-4">Apple Developer Academy introduces AI training for all students and alumni</h1>
            <div className="flex gap-3 justify-center bg-transparent">
              <button className="flex mx-7"><FcLike size={30}/></button>
              <button className="flex mx-7"><FaRegComments size={30}/></button>
              <button  className="flex mx-7"><PiShareThin size={30}/></button>
            </div>
        </div>

        <div className="col-span-12 md:col-span-6 shadow bg-transparent p-3 rounded-lg m-5">
            <div className="flex justify-center my-2">
              <Image src={github} width={30} height={30}/>
              <p className="inline-block align-bottom text-sm font-bold text-black">Ansh Sonone</p>
            </div>
            <Image src={Github} className="items-center rounded-2xl shadow-lg"/>
            <h1 className="py-4">Apple Developer Academy introduces AI training for all students and alumni</h1>
            <div className="flex gap-3 justify-center bg-transparent">
              <button className="flex mx-7"><FcLike size={30}/></button>
              <button className="flex mx-7"><FaRegComments size={30}/></button>
              <button  className="flex mx-7"><PiShareThin size={30}/></button>
            </div>
        </div>

        <div className="col-span-12 md:col-span-6 shadow bg-transparent p-3 rounded-lg m-5">
            <div className="flex justify-center my-2">
              <Image src={github} width={30} height={30}/>
              <p className="inline-block align-bottom text-sm font-bold text-black">Nayan jaiswal</p>
            </div>
            <Image src={Github} className="items-center rounded-2xl shadow-lg"/>
            <h1 className="py-4">Apple Developer Academy introduces AI training for all students and alumni</h1>
            <div className="flex gap-3 justify-center bg-transparent">
              <button className="flex mx-7"><FcLike size={30}/></button>
              <button className="flex mx-7"><FaRegComments size={30}/></button>
              <button  className="flex mx-7"><PiShareThin size={30}/></button>
            </div>
        </div>

        <div className="col-span-12 md:col-span-6 shadow bg-transparent p-3 rounded-lg m-5">
            <div className="flex justify-center my-2">
              <Image src={github} width={30} height={30}/>
              <p className="inline-block align-bottom text-sm font-bold text-black">Devesh Namdeo</p>
            </div>
            <Image src={Github} className="items-center rounded-2xl shadow-lg"/>
            <h1 className="py-4">Apple Developer Academy introduces AI training for all students and alumni</h1>
            <div className="flex gap-3 justify-center bg-transparent">
              <button className="flex mx-7"><FcLike size={30}/></button>
              <button className="flex mx-7"><FaRegComments size={30}/></button>
              <button  className="flex mx-7"><PiShareThin size={30}/></button>
            </div>
        </div>
      </div>
      {/* contributers */}
      <div className="span text-sm text-gray-500 opacity-90">
        <p>contributers : </p>
        <Link
          className="mx-2 hover:text-white ease-in-out duration-700"
          href="https://github.com/ayushsonone07"
        >
          @Nayan Jaiswal
        </Link>
        <Link
          className="mx-2 hover:text-white ease-in-out duration-700"
          href="https://github.com/ayushsonone07"
        >
          @ayushsonone07
        </Link>
        <Link
          className="mx-2 hover:text-white ease-in-out duration-700"
          href="https://github.com/DeveshN02"
        >
          @Devesh Namdeo
        </Link>
      </div>
    </main>
  );
}
