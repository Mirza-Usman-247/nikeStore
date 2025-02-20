import React from "react";
import Image from "next/image";
import logo2 from "@/public/images/logo2.png";
import MenuSection from "./MenuSection";
import Link from "next/link";
import Navigationbar from "./Navigationbar";
import Serchbar from "./Serchbar";
import Carticon from "./Carticon";
import logo1 from "@/public/images/logo1.png";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-4 py-2 bg-[#f5f5f5] ">
          <Link href="/" className="flex items-center">
            <Image
              src={logo1}
              alt="Jordan Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/stores"
              className="hover:text-gray-600 text-[#111111] font-medium hoverEffect"
            >
              Find a Store
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/help-center"
              className="hover:text-gray-600 text-[#111111] font-medium hoverEffect"
            >
              Help
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/join"
              className="hover:text-gray-600 text-[#111111] font-medium hoverEffect"
            >
              Join Us
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/signin"
              className="hover:text-gray-600 text-[#111111] font-medium hoverEffect"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-3 items-center gap-3 py-3">
        <div className="flex justify-start items-center w-1/2 ">
          <Link href="/" className="">
            <Image src={logo2} alt="logo2" className="w-14 h-6" />
          </Link>
        </div>
        <div className="flex justify-center items-center w-full">
          <Navigationbar />
        </div>
        <div className="flex items-center justify-end gap-3 w-1/2">
          <Serchbar />
          {/* <Favourite /> */}
          <User/>
          <Carticon />
          <MenuSection className="md:hidden w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
