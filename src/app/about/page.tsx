// src/pages/about/index.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/AboutHero';
import Goals from '@/components/Goals';
export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-10 container mx-auto text-center">
        <HeroSection/>
      
      </section>
      
      <section className="py-6 container mx-auto text-center">
       
        
        <div className="py-6 container mx-auto text-center"><Goals/></div>
        
      </section>
      
      <Footer />
    </div>
  );
}