"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import useCartStore from "@/cartStore";
import { Product } from "@/sanity.types";
import toast from "react-hot-toast";

interface Props {
    Product: Product
}

const QauntityButton = ({Product}: Props) => {
    const {
        removeItem,
        getItemCount,
        addItem,
        deleteCartProduct,
        getGroupedItems
      } = useCartStore();
  const itemsConunt  = getItemCount(Product?._id)
  useEffect(() => {
    console.log('Current cart items:', getGroupedItems());
  }, [getGroupedItems()]);
  return (
    <div className="flex justify-between items-center px-2">
      <div className="outline outline-1 w-auto mt-3 flex justify-center items-center rounded-full h-9">
        {itemsConunt > 1 ? (
          <Button
            variant="ghost"
            className="h-9 w-9 rounded-full"
            onClick={() => {
              removeItem(Product._id)
              toast.success(`${Product.productName?.substring(0,12)}... remove succesfully`)
            }}
          >
            <Minus className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="h-9 w-9 text-muted-foreground hover:text-destructive rounded-full"
            onClick={() => {
              deleteCartProduct(Product._id)
              toast.success(`${Product.productName?.substring(0,12)}... deleted succesfully`)
            }}
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        )}
        <span className="min-w-8 text-center">{itemsConunt}</span>
        <Button
          variant="ghost"
          className="h-9 w-9 rounded-full"
          onClick={() => {
            addItem(Product)
            toast.success(`${Product.productName?.substring(0,12)}... added succesfully`)
          }}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default QauntityButton;
