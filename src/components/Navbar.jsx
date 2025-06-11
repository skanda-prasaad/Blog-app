import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="font-bold text-2xl flex gap-5">
        <Image w={32} h={32} src="/logo.png" alt="logo" />
        <span>Blogging</span>
      </Link>
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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="/" className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
            <button>Login</button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 lg:gap-12 font-medium">
        <Link Link to="/">
          Home
        </Link>
        <Link Link to="/">
          Trending
        </Link>
        <Link Link to="/">
          Most popular
        </Link>
        <Link Link to="/">
          About
        </Link>
        <SignedOut>
          <Link to="/login" className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
            <button className="cursor-pointer">Login</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
