import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Image as IImage } from "sanity";
import PriceFormater from "./PriceFormater";

interface product{
  productName: string;
  price: string;
  image: IImage;
  category: string;
  _id: number;
  gender: string;
  kids: string;
  description: string;
  status: string;
  tags: string;
  slug: {
    current: string;
  };
  featured: string;
}
interface Props {
  products: product[];
  showFilter?: boolean;
}

const ProductGrid = ({ products, showFilter }: Props) => {
  return (
    <div className="w-full" >
      <div
        className={`grid grid-cols-2 gap-3 ${showFilter ? "md:grid-cols-2 lg:grid-cols-3 w-full" : "lg:grid-cols-3 xl:grid-cols-4"}`}
      >
        {products.map((val, i) => {
          return (
            <div className="space-y-2 py-3 snap-center w-full" key={i}>
              <Link href={`/products/${val.slug.current}`} className="">
                <Image
                  src={
                    val.image ? urlFor(val.image).url() : "/fallback-image.jpg"
                  }
                  alt={val.productName}
                  width={1000}
                  height={348}
                  className="md:h-[348px] object-cover"
                  quality={80}
                />
              </Link>
              <div className="flex flex-col gap-y-1">
                <h4 className="text-base font-medium text-[#9E3500]">
                  {val.status}
                </h4>
                <h4 className="text-base font-medium text-[#111111] line-clamp-1">
                  {val.productName}
                </h4>
                <p className="text-base font-normal text-[#757575] line-clamp-1">
                  {val.category}
                </p>
                <h4 className=" text-base font-medium text-[#111111]">
                  <PriceFormater amount={val.price} />
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
