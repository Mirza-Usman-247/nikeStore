import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("lg:px-6 md:px-4 sm:px-2 px-0 py-3 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
