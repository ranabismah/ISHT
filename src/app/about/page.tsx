
import HeroSection from "@/components/AboutHero";
import Goals from "@/components/Goals";
export default function About() {
  return (
    <div>
    
      <section className="py-10 container mx-auto text-center">
        <HeroSection />
      </section>

      <section className="py-6 container mx-auto text-center">
        <Goals />
      </section>

      
    </div>
  );
}
