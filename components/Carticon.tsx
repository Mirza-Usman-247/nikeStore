import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";

const Carticon = () => {
  return (
    <div>
      <Link href="/cart" className="group">
        <IoBagOutline className="w-5 h-5 group-hover:text-zinc-700 cursor-pointer text-[#726E8D] hoverEffect" />
        
      </Link>
    </div>
  );
};

export default Carticon;
