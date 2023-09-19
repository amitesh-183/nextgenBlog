import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-around h-screen">
      <div className="hero content w-[50%] px-20 flex flex-col justify-center">
        <h1 className=" font-black text-6xl py-4">
          Unleash the Future of Blogging
        </h1>
        <p className=" font-medium text-2xl">
          &quot;Welcome to NextGen Blogs, where innovation meets inspiration.
          Explore the future of blogging and discover a world of limitless
          possibilities. Join us in shaping the digital narrative of
          tomorrow.&quot;
        </p>
      </div>
      <div className="hero image w-[50%] flex flex-col justify-center">
        <Image
          src={"/assets/hero.webp"}
          width={720}
          height={325}
          className=" rotate-360"
          alt="Hero-Image"
        />
      </div>
    </main>
  );
}
