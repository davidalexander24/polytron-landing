import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#070707]">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <LifestyleSection />
      <Footer />
    </main>
  );
}
