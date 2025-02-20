import React from "react";
import image3 from "@/public/images/Image3.png";
import Image from "next/image";
import { Button } from "./ui/button";

const DontMiss = () => {
  return (
    <div className="w-full">
      <div className="py-3 capitalize">
        <h1 className="text-xl font-medium text-[#111111] text-left">
          Don't Miss
        </h1>
      </div>
      <div>
        <Image
          src={image3}
          alt="heroimage"
          width={1344}
          height={700}
          className="w-full"
        />
      </div>
      <div className="container mx-auto py-10 w-full bg-white">
        <div className="flex flex-col w-full mb-6 text-[#111111] capitalize">
          <h1 className=" text-5xl text-center font-medium mb-6">
            flight essentials
          </h1>
          <p className="md:w-[42%] w-[90%] mx-auto text-base text-center">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button className="bg-[#111111] hoverEffect text-md shadow-none rounded-full capitalize text-[#FFFFFF]">
            shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
