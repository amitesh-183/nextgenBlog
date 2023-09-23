import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main
        className={`flex justify-around h-[100vh] text-white w-100vw hero-bg`}
      >
        <div className="hero-content w-[50%] px-20 ms-20 flex flex-col mt-20 justify-center">
          <span className=" uppercase text-lg bg-gradient-to-r from-yellow-400 to-white  bg-clip-text text-transparent font-bold">
            NextGen blogs
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
          <div className=" flex gap-4 mt-2">
            <button className=" bg-green-400 bg-opacity-40 hover:bg-blue-500 hover:bg-opacity-25 hover:border hover:border-blue-600 font-bold w-[10rem] hover:shadow-md duration-300 ease-in-out px-8 py-4 rounded-xl">
              <Link href="/admin">Admin</Link>
            </button>
            <button className="border border-green-200 w-[10rem] hover:border hover:border-blue-600 hover:bg-blue-400 hover:bg-opacity-25 font-bold hover:shadow-md duration-300 ease-in-out  px-8 py-4 rounded-xl">
              Learn more
            </button>
          </div>
        </div>
        <div className="hero image w-[50%] flex flex-col justify-center">
          {/* <Image
            src={"/assets/hero.jpg"}
            width={600}
            height={325}
            className=" mix-blend-multiply"
            alt="Hero-Image"
          /> */}
        </div>
      </main>
    </>
  );
}
