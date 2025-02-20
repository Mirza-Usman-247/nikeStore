import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  amount: number | string | undefined;
  className?: string;
}

const PriceFormater = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return <div className={cn("", className)}>{formattedPrice}</div>;
};

export default PriceFormater;
