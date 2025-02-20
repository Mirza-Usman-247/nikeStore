import React from "react";
import image2 from "@/public/images/Image2.png";
import Image from "next/image";
import { Button } from "./ui/button";

const Featured = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="py-3 capitalize">
        <h1 className="text-xl font-medium text-[#111111] text-left">
          Featured
        </h1>
      </div>
      <div>
        <Image
          src={image2}
          alt="heroimage"
          width={1344}
          height={700}
          className="w-full"
        />
      </div>
      <div className="container mx-auto py-6 w-full bg-white">
        <div className="flex flex-col w-full mb-6 text-[#111111]">
          <h1 className=" text-5xl text-center capitalize font-bold mb-6">
            step into what feels good
          </h1>
          <p className="lg:w-[42%] md:w-[62%] sm:w-[82%] w-[90%] mx-auto text-base text-center">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button className="bg-[#111111] hoverEffect text-md shadow-none rounded-full capitalize text-[#FFFFFF]">
            find your shoe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
