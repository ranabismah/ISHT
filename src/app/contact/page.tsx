// src/pages/contact/index.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Contact Us</h2>
        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
