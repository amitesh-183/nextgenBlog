import Image from "next/image";
import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="nav container flex justify-around items-center py-4">
        <div className="logo">
          {/* <Image
            src="/assets/logo.webp"
            width={300}
            className=" object-cover"
            height={240}
            alt="logo"
          /> */}
          <h1 className=" font-black text-4xl">NextGen Blogs</h1>
        </div>
        <div>
          <ul id="menu" className="flex gap-6 uppercase text-xl font-bold">
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
