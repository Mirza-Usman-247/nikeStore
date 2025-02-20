import Container from "@/components/Container";
import FeaturedItems from "@/components/FeaturedItems";
import ProductDetails from "@/components/ProductDetails";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <Container>
      <ProductDetails Pathname={slug} />
      <FeaturedItems Name="You may also like" />
    </Container>
  );
}
