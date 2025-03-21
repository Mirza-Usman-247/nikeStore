import React from "react";
import Image from "next/image";
import logo2 from "@/public/images/logo2.png";
import MenuSection from "./MenuSection";
import Link from "next/link";
import Navigationbar from "./Navigationbar";
import Serchbar from "./Serchbar";
import Carticon from "./Carticon";
import UserIcon from "./UserIcon";

const Navbar = () => {
  return (
    <nav className="w-full">
      
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
          <Carticon />
          <UserIcon/>
          <MenuSection className="md:hidden w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
