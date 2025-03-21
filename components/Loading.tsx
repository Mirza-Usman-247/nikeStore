import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-2 w-full text-2xl font-medium py-40">
      <BiLoaderAlt className="w-5 h-5 animate-spin" />
      Loading...
    </div>
  );
};

export default Loading;
