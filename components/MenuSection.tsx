"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Navbar } from "@/constant";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AiOutlineMenu } from "react-icons/ai";
interface Props{
  className?: string
}

const MenuSection = ({className}:Props) => {
  const [isMenu, setIsMenu] = useState(false);

  const HandleMenu = () => {
    setIsMenu(!isMenu);
  };
  const onclose = () => {
    setIsMenu(false);
  };

  
  return (
    <div className={cn("flex justify-start items-center", className)}>
      <div className="flex items-center justify-center" onClick={HandleMenu}>
        <AiOutlineMenu className="w-6 h-6 cursor-pointer" />
      </div>
      <div
        className={
          isMenu
            ? "fixed left-0 top-0 w-[80%] h-screen bg-transparent py-5 px-5 ease-in duration-200"
            : "fixed left-[-50%] top-0 hoverEffect ease-in duration-200"
        }
        onClick={onclose}
      ></div>
      <div
        className={
          isMenu
            ? "fixed right-0 top-0 w-[276px] h-screen shadow-md bg-[#F5F5F5] border rounded-md py-5 px-5 ease-in duration-500"
            : "fixed right-[-100%] top-0 ease-in duration-500"
        }
      >
        <div
          className="flex items-center justify-end cursor-pointer"
          onClick={onclose}
        >
          <RxCross2 className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          {Navbar.map((val) => {
            return (
              <div key={val.title}>
                <Link
                  href={val.href}
                  className={`hover:text-[#000000] hoverEffect font-medium text-lg relative group cursor-pointer hoverEffect w-1/3`}
                  onClick={onclose}
                >
                  {val.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
