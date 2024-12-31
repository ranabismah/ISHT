
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-6">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Name */}
        <div className="flex flex-col items-start">
          <p className="font-semibold text-2xl">Iqra Sweet Home</p>
          <p className="text-sm mt-2">Providing care and support for children and families in need.</p>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <p className="font-semibold mb-2">Address</p>
          <p className="text-sm">Iqra Sweet Home, House No. R-18, Phase 1, Defence View, Shaheed-e-Millat Road, Ext. Karachi.</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 hover:text-blue-800 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-600 hover:text-pink-800 transition" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col">
          <p className="font-semibold mb-2">Useful Links</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/programs" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4">
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} Iqra Sweet Home. All rights reserved.</p>
      </div>
    </footer>
  );
}
