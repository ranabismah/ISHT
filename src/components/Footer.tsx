// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-primary text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Iqra Sweet Home. All rights reserved.</p>
      </footer>
    );
  }