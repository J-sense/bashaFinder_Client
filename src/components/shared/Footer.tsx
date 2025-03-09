import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 border-t border-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-black">BashaFinder</h2>
            <p className="text-gray-600 mt-2">
              Find your dream home with ease. We connect buyers, sellers, and
              renters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition"
                >
                  Agents
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-black">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-black" />{" "}
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-black" />{" "}
                <span>support@bashafinder.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-black" />{" "}
                <span>+880 1234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-black">Follow Us</h3>
            <div className="flex gap-4 mt-3">
              <a href="#" className="text-gray-600 hover:text-black transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BashaFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
