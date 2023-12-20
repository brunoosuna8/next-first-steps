import { HomeIcon, MegaphoneIcon } from "@primer/octicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = async () => {
  {
    console.log("navbar creado");
  }
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/">
        {" "}
        <HomeIcon /> <span>Home</span>
      </Link>
      <div className="flex center">
        <Link className="ml-2" href="/about">
          About
        </Link>
        <Link className="ml-2" href="/pricing">
          Pricing
        </Link>
        <Link className="ml-2" href="/contact">
          <MegaphoneIcon></MegaphoneIcon> <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
