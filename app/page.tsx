import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex justify-around h-[86vh]">
        <div className="hero content w-[50%] px-20 ms-20 flex flex-col justify-center">
          <span className=" uppercase text-lg bg-gradient-to-r from-blue-600 to-violet-600  bg-clip-text text-transparent font-bold">
            Nextgen blogs
          </span>
          <h1 className=" font-black text-6xl">
            Unleash the Future of Blogging
          </h1>
          <p className=" font-medium text-xl py-4">
            &quot;Welcome to NextGen Blogs, where innovation meets inspiration.
            Explore the future of blogging and discover a world of limitless
            possibilities. Join us in shaping the digital narrative of
            tomorrow.&quot;
          </p>
          <div className=" flex gap-4">
            <button className=" bg-green-400 font-bold hover:shadow-md duration-300 ease-in-out hover:shadow-lime-400 px-8 py-4 rounded-xl">
              <Link href="/admin">Admin</Link>
            </button>
            <button className=" bg-green-200 font-bold hover:shadow-md duration-300 ease-in-out hover:shadow-lime-400 px-8 py-4 rounded-xl">
              Learn more
            </button>
          </div>
        </div>
        <div className="hero image w-[50%] flex flex-col justify-center">
          <Image
            src={"/assets/hero.jpg"}
            width={600}
            height={325}
            className=" mix-blend-multiply"
            alt="Hero-Image"
          />
        </div>
      </main>
    </>
  );
}
