import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center justify-evenly rounded-md w-[15%] h-screen bg-green-400 text-white text-bold text-2xl">
      <Link href="/note">
        <button className="hover:cursor-pointer hover:opacity-80">
          NOTE APP
        </button>{" "}
      </Link>
      <Link href="/todo">
        <button className="hover:cursor-pointer hover:opacity-80">
          ADVANCED TODO
        </button>{" "}
      </Link>
      <Link href="/counter">
        <button className="hover:cursor-pointer hover:opacity-80">
          COUNTER
        </button>{" "}
      </Link>
      <Link href="/forum">
        <button className="hover:cursor-pointer hover:opacity-80">FORUM</button>{" "}
      </Link>
      <Link href="/about">
        <button className="hover:cursor-pointer hover:opacity-80">ABOUT</button>{" "}
      </Link>
      <Link href="/FAQ">
        <button className="hover:cursor-pointer hover:opacity-80">
          FAQ SECTION
        </button>{" "}
      </Link>
    </div>
  );
};

export default SideBar;
