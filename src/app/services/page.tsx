// src/pages/services/index.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <div className="p-4 shadow-md border rounded">
            <h3 className="text-xl font-semibold">Service 1</h3>
            <p className="mt-2">Description of service 1.</p>
          </div>
          <div className="p-4 shadow-md border rounded">
            <h3 className="text-xl font-semibold">Service 2</h3>
            <p className="mt-2">Description of service 2.</p>
          </div>
          <div className="p-4 shadow-md border rounded">
            <h3 className="text-xl font-semibold">Service 3</h3>
            <p className="mt-2">Description of service 3.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}