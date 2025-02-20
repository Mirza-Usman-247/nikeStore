import React from "react";
import { Navbar } from "@/constant";
import Link from "next/link";

const Navigationbar = () => {
  return (
    <div>
      <div className="hidden md:inline-flex justify-center items-center gap-5 text-sm capitalize font-semibold">
        {Navbar.map((val) => {
          return (
            <div key={val.title}>
              <Link
                href={val.href}
                className={`hoverEffect relative group cursor-pointer text-lg`}
              >
                {val.title}
                <span
                  className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-zinc-700 group-hover:w-1/2 group-hover:left-0 hoverEffect`}
                />
                <span
                  className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-zinc-700 group-hover:w-1/2 group-hover:right-0 hoverEffect`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigationbar;
