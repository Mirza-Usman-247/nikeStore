"use client";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

interface productType {
  productName: string;
  price: number;
  image: IImage;
  category: string;
  slug: {
    current: string;
  };
}

const NEXT_QUERRY = `*[_type == 'product'] [8..11]`;
const GearUpProduct = () => {
  const [isLaoding, setLoading] = useState(false);
  const [isProducts, setProducts] = useState<productType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(NEXT_QUERRY);
        setProducts(data);
      } catch (error) {
        console.error("Error while fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="py-5 px-1">
      <div className="flex justify-start items-center py-1 capitalize">
        <h1 className="text-xl font-medium text-[#111111] text-left capitalize">
          shop
        </h1>
      </div>
      {!isLaoding ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {isProducts.map((val, i) => {
            return (
              <div className="space-y-2 py-3 snap-center" key={i}>
                <Link href={`/products/${val.slug.current}`} className="">
                  <Image
                    src={
                      val.image
                        ? urlFor(val.image).url()
                        : "/fallback-image.jpg"
                    }
                    alt={val.productName}
                    width={441}
                    height={441}
                    className="lg:h-[441px] w-full object-cover"
                    quality={80}
                  />
                </Link>
                <div className="flex flex-col gap-y-2">
                  <div className="flex justify-between">
                    <h4 className="text-base font-medium line-clamp-1 text-[#111111]">
                      {val.productName}
                    </h4>
                    <h1 className="text-base font-medium text-[#111111]">
                      {val.price}.00$
                    </h1>
                  </div>
                  <div>
                    <p className="text-base font-normal line-clamp-1 text-[#757575]">
                      {val.category}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2 w-full text-2xl font-medium">
          <BiLoaderAlt className="w-5 h-5 animate-spin" />
          Loading...
        </div>
      )}
    </div>
  );
};

export default GearUpProduct;
