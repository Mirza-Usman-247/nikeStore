"use client";
import React from "react";
import { Button } from "./ui/button";
import { IoBagOutline } from "react-icons/io5";
import { Product } from "@/sanity.types";
import useCartStore from "@/cartStore";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  className?: string;
}

const AddToCart = ({ product, className }: Props) => {
  const { addItem } = useCartStore();
  return (
    <div className={cn("", className)}>
      <Button
        onClick={() => {
          addItem(product);
          toast.success(
            `${product.productName?.substring(0, 12)}... added sucessfully`
          );
        }}
        className="bg-[#111111] w-full mt-5 h-14 text-xl hoverEffect shadow-none rounded-full capitalize text-[#FFFFFF]"
      >
        add to basket
        <IoBagOutline className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default AddToCart;
