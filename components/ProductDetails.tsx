
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCart from "./AddToCart";
import { Image as IImage } from "sanity";


const ProductDataFetching = async () => {
  const fetchData = await client.fetch(`*[ _type == 'product']`);
  return fetchData;
};

interface Product {
  productName: string;
  price: string;
  image: IImage
  description: string;
  slug: {
    current: string;
  };

}

interface Props {
  Pathname?: string;
}
const ProductDetails = async ({ Pathname }: Props) => {

  const product = await ProductDataFetching();
  const slug = product.find((val: Product) => val.slug.current === Pathname);
  if (!slug) {
    return <div>Product not found</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <Image
          src={urlFor(slug.image).url()}
          alt={slug.productName}
          width={653}
          height={653}
          quality={80}
          className="md:w-[653px] w-full lg:h-[653px] max-h-[653px] rounded-md"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-start lg:w-[35%] w-full sm:px-6 px-4">
        <h1 className="text-3xl lg:text-5xl sm:text-4xl font-medium text-[#111111] text-start">
          {slug.productName}
        </h1>
        <p className="text-lg lg:text-xl text-[#111111] text-start mt-8 w-11/12">
          {slug.description}
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-[#111111] text-start mt-8">
          {slug.price}.00$
        </h2>
        <div className="flex flex-col items-center w-full mt-8">
          <div className="w-full">
            <AddToCart product={slug} />
          </div>
          {/* <Button className="bg-[#FFFFFF] w-full mt-5 h-14 text-xl hoverEffect shadow-none outline rounded-full capitalize text-[#111111] hover:bg-[#F9F9F9]">
            add to Favourite
            <CiHeart className="w-5 h-5" />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
