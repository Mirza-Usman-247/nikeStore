import React from "react";
import image1 from "@/public/images/Image1.png";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full">
      <div>
        <Image
          src={image1}
          alt="heroimage"
          width={1344}
          height={700}
          className="w-full"
        />
      </div>
      <div className=" mx-auto py-6 w-full bg-white">
        <div className="flex flex-col w-full mb-6 text-[#111111]">
          <p className=" text-md text-center font-semibold title-font">
            First Look
          </p>
          <h1 className=" text-5xl text-center font-bold mb-4">
            Nike Air Max Pulse
          </h1>
          <p className="lg:w-[42%] md:w-[62%] sm:w-[82%] w-[90%] mx-auto text-md text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the
            max.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button className="bg-[#111111] hoverEffect font-medium text-md h-10 shadow-none rounded-full capitalize text-[#FFFFFF]">
            notify me
          </Button>
          <Button className="bg-[#111111] hoverEffect font-medium text-md h-10 shadow-none rounded-full capitalize text-[#FFFFFF]">
            shop air max
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
