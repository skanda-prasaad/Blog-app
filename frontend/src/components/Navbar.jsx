import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative px-4">
      {/* Logo */}
      <Link to="/" className="font-bold text-2xl flex gap-2 items-center">
        <Image w={32} h={32} src="/logo.png" alt="logo" />
        <span>Blogging</span>
      </Link>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden z-50">
        <div
          className="cursor-pointer text-3xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU (SLIDE-IN) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 
              backdrop-blur-md bg-blue-200/60 
              flex flex-col items-center justify-center gap-8 
              text-gray-700 text-xl transition-transform duration-300 
              ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          Trending
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          Most popular
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          About
        </Link>
        <SignedOut>
          <Link
            to="/login"
            className="py-2 px-4 rounded-3xl bg-blue-700 text-white"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </SignedOut>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link
            to="/login"
            className="py-2 px-4 rounded-3xl bg-blue-700 text-white"
          >
            Login
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
