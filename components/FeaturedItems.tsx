"use client";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormater from "./PriceFormater";
import { useEffect, useState } from "react";

interface productType {
  productName: string;
  price: number;
  image: IImage;
  category: string;
  slug: {
    current: string;
  };
}
interface Props {
  Name: string;
}
const NEXT_QUERRY = `*[ tags == "Shoes"]`;
const FeaturedItems = ({ Name }: Props) => {
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
    <div className="py-5">
      <div className="py-3 capitalize">
        <h1 className="text-xl font-medium text-[#111111] text-left capitalize">
          {Name}
        </h1>
      </div>
      <div className="flex gap-4 px-4">
        {!isLaoding ? (
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
            {isProducts.map((val, i) => {
              return (
                <div
                  className="space-y-2 py-3 snap-center md:min-w-[441px] min-w-max  "
                  key={i}
                >
                  <Link href={`/products/${val.slug.current}`} className="">
                    <Image
                      src={
                        val.image
                          ? urlFor(val.image).url()
                          : "/fallback-image.jpg"
                      }
                      alt={val.productName}
                      width={320}
                      height={320}
                      className="w-[320px] h-[320px] sm:w-[441px] sm:h-[441px] object-cover"
                      quality={80}
                    />
                  </Link>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-base font-medium text-[#111111]">
                        {val.productName}
                      </h4>
                      <p className="text-base font-normal text-[#757575]">
                        {val.category}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-base font-medium text-[#111111]">
                        <PriceFormater amount={val.price} />
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            No Product Plz refresh
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedItems;
