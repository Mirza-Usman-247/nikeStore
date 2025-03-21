import Link from "next/link";
import React from "react";
import Image6 from "@/public/images/Image6.png";
import Image5 from "@/public/images/Image5.png";
import Image4 from "@/public/images/Image4.png";
import Image from "next/image";

const Essential = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Link href="/category/men" className="group relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={Image5}
              alt="Men's essentials collection"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-10 left-5">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
                Men&apos;s
              </span>
            </div>
          </div>
        </Link>
        <Link href="/category/women" className="group relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={Image4}
              alt="Women's essentials collection"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-10 left-5">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
                Women&apos;s
              </span>
            </div>
          </div>
        </Link>

        <Link href="/category/kids" className="group relative">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={Image6}
              alt="Kids' essentials collection"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-10 left-5">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium">
                Kids&apos;
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Essential;
