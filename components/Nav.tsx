import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <div className="relative">
      <div className="nav w-full text-white fixed flex justify-between px-40 items-center py-4">
        <div className="logo flex">
          <Image
            src="/assets/blogging.png"
            width={40}
            className=" object-cover"
            height={40}
            alt="logo"
          />
          <h1 className=" font-black text-4xl">NexGen</h1>
        </div>
        <div>
          <ul id="menu" className="flex gap-6 uppercase text-lg font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Topics</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
