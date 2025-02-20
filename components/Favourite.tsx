import { cn } from "@/lib/utils";
import React from "react";
import { BiHeart } from "react-icons/bi";

interface Props {
  className?: string
}
const Favourite = ({className}: Props) => {
  return (
    <div className={cn('', className)}>
      <BiHeart className="w-5 h-5 cursor-pointer font-medium" />
    </div>
  );
};

export default Favourite;
