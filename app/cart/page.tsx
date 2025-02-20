import CartPage from "@/components/CartPage";
import Container from "@/components/Container";
import FeaturedItems from "@/components/FeaturedItems";

export default function Cart() {
  return (
    <Container>
      <Container className="lg:px-32">
        <CartPage />
      </Container>
      <FeaturedItems Name="you may also like it" />
    </Container>
  );
}
