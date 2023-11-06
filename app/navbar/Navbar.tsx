import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-purple-300 p-2">
      <div className="w-1/3 m-auto flex items-center justify-around max-[450px]:w-full">
        <Link href={"/"}>
          <h3>Home</h3>
        </Link>
        <Link href={"/about"}>
          <h3>About</h3>
        </Link>
        <Link href={"/blog"}>
          <h3>Blog</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
