// src/pages/about/index.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">About Us</h2>
        <p className="mt-4">Iqra Sweet Home is committed to delivering excellence and care.</p>
      </section>
      <Footer />
    </div>
  );
}