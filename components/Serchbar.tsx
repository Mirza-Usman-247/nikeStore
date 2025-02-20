"use client";
import React, { useCallback, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "./ui/dialog";
import { RxCross2 } from "react-icons/rx";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Image as IImage } from "sanity";
import logo2 from "@/public/images/logo2.png";
import { BiLoaderAlt } from "react-icons/bi";

interface productType {
  productName: string;
  price: number;
  image: IImage;
  category: string;
  slug: {
    current: string;
  };
  _id: number;
}

const Serchbar = () => {
  const [isLaoding, setLoading] = useState(false);
  const [isProducts, setProducts] = useState<productType[]>([]);
  const [isSearch, setSearch] = useState("");
  const [isShowSearch, setShowSearch] = useState(false);

  const fetchData = useCallback(async () => {
    if (!isSearch) {
      setProducts([]);
      return;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && productName match $search]{
        productName,
        price,
        image,
        category,
        slug{
          current
        },
        _id
      }`;
      const params = { search: `${isSearch}*` };
      const res = await client.fetch(query, params);
      setProducts(res);
    } catch (error) {
      console.log("Items not Found:", error);
    } finally {
      setLoading(false);
    }
  }, [isSearch]);
  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(debounce);
  }, [isSearch, fetchData]);
  return (
    <div className="">
      <Dialog
        open={isShowSearch}
        onOpenChange={() => setShowSearch(!isShowSearch)}
      >
        <DialogTrigger onClick={() => setShowSearch(!isShowSearch)}>
          <div className="flex justify-center items-center">
            <div className="hidden relative md:flex justify-start md:px-3 items-center md:w-44 md:h-10 md:bg-[#F5F5F5] md:rounded-full">
              <Input
                className="absolute top-0 left-0 w-44 h-10 rounded-full border-none shadow-none"
                placeholder="Search..."
                onClick={() => setSearch("")}
              />
              <BiSearch className="absolute top-3 right-2 w-5 h-5 hover:text-gray-800 font-medium hoverEffect" />
            </div>
            <BiSearch className="w-5 h-5 md:hidden hover:text-gray-800 mt-1 font-medium hoverEffect" />
          </div>
        </DialogTrigger>
        <DialogContent className="h-[70vh] flex flex-col overflow-hidden border-2">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <Image src={logo2} alt="Logo" className="w-14 h-6" />
              <div className="relative w-[60%]">
                <Input
                  className="rounded-full bg-[#F5F5F5] w-full"
                  value={isSearch}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="bg-[#111111] rounded-full">
                  <RxCross2
                    className="absolute top-1.5 right-3 w-6 h-6 cursor-pointer "
                    onClick={() => setSearch("")}
                  />
                </div>
              </div>
              <DialogClose asChild>
                <RxCross2 className="w-6 h-6 cursor-pointer" />
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          {isLaoding ? (
            <div className="flex justify-center items-center gap-2 font-medium">
              <BiLoaderAlt className="w-5 h-5 animate-spin" />
              Loading...
            </div>
          ) : (
            <div>
              {isProducts.length ? (
                <div className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4">
                  {isProducts.map((product: productType) => (
                    <div
                      className="space-y-2 py-3 snap-center min-w-[260px] max-w-[260px]"
                      key={product._id}
                    >
                      <DialogClose asChild>
                        <Link
                          href={`/product/${product.slug.current}`}
                          className=""
                        >
                          <Image
                            src={
                              product.image
                                ? urlFor(product.image).url()
                                : "/fallback-image.jpg"
                            }
                            alt={product.productName}
                            width={260}
                            height={260}
                            className=" object-cover"
                            quality={80}
                          />
                        </Link>
                      </DialogClose>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-base font-medium text-[#111111]">
                            {product.productName}
                          </h4>
                          <p className="text-base font-normal text-[#757575]">
                            {product.category}
                          </p>
                        </div>
                        <div>
                          <h1 className="text-base font-medium text-[#111111]">
                            {product.price}.00 $
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center text-xl font-medium">
                  {isSearch ? (
                    <div>
                      Nothing match with{" "}
                      <span className="text-black font-medium">{isSearch}</span>
                      . try something else
                    </div>
                  ) : (
                    <div className="flex justify-center items-center capitalize">
                      <BiSearch className="w-6 h-6" />
                      Search or explore from nike
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent> 
      </Dialog>
    </div>
  );
};

export default Serchbar;
