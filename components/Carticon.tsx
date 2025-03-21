"use client";
import useCartStore from "@/cartStore";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";

const Carticon = () => {
  const { items } = useCartStore();
  return (
    <div>
      <Link href={"/cart"} className="relative">
        <IoBagOutline className="w-5 h-5 cursor-pointer font-medium" />
        <span className="absolute -top-0 -right-0 bg-black rounded-full w-3 h-3 text-white text-xs flex justify-center items-center">{items.length}</span>
      </Link>
    </div>
  );
};

export default Carticon;
