import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center gap-20 pt-8 rounded-md w-[15%] min-h-screen bg-green-400 text-white text-bold text-2xl">
      <Link href="/home">
        <button>Project</button>{" "}
      </Link>
      <Link href="/forum">
        <button>FORUM</button>{" "}
      </Link>
      <Link href="/counter">
        <button>Counter</button>{" "}
      </Link>
      <Link href="/todo">
        <button>Todo</button>{" "}
      </Link>
      <Link href="/about">
        <button>About</button>{" "}
      </Link>
      <Link href="/FAQ">
        <button>FAQ Section</button>{" "}
      </Link>
    </div>
  );
};

export default SideBar;
