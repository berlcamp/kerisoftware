import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Clients } from "@/components/Clients";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Clients />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
