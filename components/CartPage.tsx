"use client";
import useCartStore from "@/cartStore";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import QauntityButton from "./QauntityButton";
import { Button } from "./ui/button";
import PriceFormater from "./PriceFormater";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  createCheckoutSession,
  orderData,
} from "@/actions/createCheckoutSession";
import Loading from "./Loading";
import NoteAccessToCart from "./NoteAccessToCart";
import FeaturedItems from "./FeaturedItems";

const CartPage = () => {
  const { getGroupedItems, getTotalPrice } = useCartStore();
  const [isClient, setisClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const cartProduct = getGroupedItems();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  useEffect(() => {
    setisClient(true);
  }, []);
  if (!isClient) {
    return <Loading />;
  }
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const orderData: orderData = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "unknown",
        clerkUserId: user?.id ?? "unknown",
      };
      const CheckoutURL = await createCheckoutSession(cartProduct, orderData);
      if (CheckoutURL) {
        window.location.href = CheckoutURL;
      }
    } catch (error) {
      console.log("Error walie Procending Checkout", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {isSignedIn ? (
        <div>
          <div className="flex flex-col lg:flex-row lg:px-32">
            <div className="lg:w-[70%]">
              <div className="w-full px-5 py-4 bg-[#F5F5F5] shadow-sm ">
                <h1 className="text-lg font-semibold text-[#111111] capitalize">
                  free delivery
                </h1>
                <div className="flex items-center gap-3">
                  <h2 className="text-sm text-[#111111]">
                    Applies to orders of $ 14 000.00 or more.
                  </h2>
                  <div className="text-md font-medium underline-offset-4 underline text-[#111111] hover:text-[#000000] hoverEffect">
                    View details
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center px-5 py-5">
                <IoBagOutline className="w-5 h-5 font-medium" />
                <h1 className="text-2xl px-1 font-bold text-[#111111] capitalize">
                  Bag
                </h1>
              </div>
              {cartProduct.length ? (
                cartProduct.map(({ product }) => (
                  <div className="py-3 px-3" key={product._id}>
                    <div className="flex gap-3">
                      {product?.image ? (
                        <Image
                          src={
                            urlFor(product.image)?.url() ??
                            "/fallback-image.jpg"
                          }
                          alt="Product Image"
                          width={200}
                          height={200}
                          className="rounded-md"
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                      <div className="flex flex-1 flex-col ">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-xl">
                            {product.productName}
                          </h3>
                          <h3 className="text-lg md:block hidden">
                            <PriceFormater amount={product.price} />
                          </h3>
                        </div>
                        <h2 className="text-lg md:hidden flex">
                          <PriceFormater amount={product.price} />
                        </h2>
                        <div className="text-lg text-muted-foreground">
                          {product.category}
                        </div>
                        <div className="line-clamp-2 mt-2 text-lg">
                          {product.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">
                      <QauntityButton Product={product} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-start items-center ml-2 mt-2">
                  <h1 className="text-lg font-medium text-[#111111]">
                    There is no item in bag{" "}
                    <Link
                      href="/category"
                      className="text-lg ml-2 font-medium underline-offset-4 underline text-[#111111] hover:text-[#000000] hoverEffect"
                    >
                      View Product
                    </Link>
                  </h1>
                </div>
              )}
            </div>
            <div className="space-y-4 lg:space-y-8 lg:px-5 lg:w-[30%] flex flex-col px-3 mt-2 lg:mt-0">
              <h2 className="text-3xl font-semibold text-[#111111]">Summary</h2>
              <div className="space-y-2 lg:space-y-8">
                <div className="flex justify-between items-center text-lg capitalize">
                  <h2 className="text-[#111111] font-medium ">Subtotal</h2>
                  <h2 className="text-[#111111] font-medium">
                    <PriceFormater amount={getTotalPrice()} />
                  </h2>
                </div>
                <div className="flex justify-between items-center text-lg capitalize">
                  <h2 className="text-[#111111] font-medium ">
                    Estimated Delivery & Handling
                  </h2>
                  <h2 className="text-[#111111] font-medium ">Free</h2>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                  <h2 className="text-[#111111] font-medium ">Total</h2>
                  <h2 className="text-[#111111] font-medium">
                    <PriceFormater amount={getTotalPrice()} />
                  </h2>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full rounded-full px-3 h-14 text-xl text-center flex items-center"
                size="lg"
              >
                {loading ? "Processing" : "Checkout"}
              </Button>
            </div>
          </div>
          <FeaturedItems Name="you may also like it" />
        </div>
      ) : (
        <NoteAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
