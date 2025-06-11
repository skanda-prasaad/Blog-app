import { useState } from "react";
import Image from "./Image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="font-bold text-2xl flex gap-5">
        <Image w={32} h={32} src="/logo.png" alt="logo" />
        <span>Blogging</span>
      </div>
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((x) => !x)}
        >
          {open ? "X" : "="}
        </div>
        <div
          className={`w-full gap-12 text-2xl font-medium absolute top-16 h-full flex flex-col justify-center items-center transition-all ease-in-out duration-600 ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most popular</a>
          <a href="/">About</a>
          <a className="py-2 px-4 rounded-3xl bg-blue-700 text-white" href="">
            <button>Login</button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 lg:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most popular</a>
        <a href="/">About</a>
        <a className="py-2 px-4 rounded-3xl bg-blue-700 text-white" href="">
          <button>Login</button>
        </a>
      </div>
    </div>
  );
}
