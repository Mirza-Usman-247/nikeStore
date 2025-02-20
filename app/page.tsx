import Container from "@/components/Container";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import Featured from "@/components/Featured";
import GearUpProduct from "@/components/GearUpProduct";
import DontMiss from "@/components/Dontmiss";
import Essential from "@/components/Essential";

export default function Home() {
  return (
    <Container>
      <Hero />
      <FeaturedItems Name="best of air max" />
      <Featured />
      <div className=" py-2">
        <h1 className="text-xl font-medium text-[#111111] text-left capitalize">
          Gears Up
        </h1>
        <GearUpProduct />
      </div>
      <DontMiss />
      <Essential />
    </Container>
  );
}
