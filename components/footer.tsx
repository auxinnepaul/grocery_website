import { APP_NAME, EMAIL, PHONE_NUMBER } from "@/lib/constants";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  LeafyGreen,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 dark:bg-black text-white py-12 border-t border-primary">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="flex space-x-2 text-xl md:text-2xl font-semibold mb-4">
              <LeafyGreen className="h-8 w-8 text-primary dark:text-white" />
              <span>{APP_NAME}</span>
            </h2>
            <p className="mb-4">
              Providing fresh produce and quality groceries to businesses and
              organizations.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-300 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-green-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-300 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-300 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Get in touch
            </h3>
            <h3 className="text-xl font-semibold">{APP_NAME}</h3>
            <address className="not-italic mb-4">
              <p>123 Fresh Street</p>
              <p>Ruaraka</p>
              <p>Nairobi Kenya</p>
            </address>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Mail size={20} className="mr-2" />
              <p> {EMAIL}</p>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <Phone size={20} className="mr-2" />
              <p> {PHONE_NUMBER}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <a
            href="https://bricapa.com"
            className="py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered and Built by <span className="text-primary">Bricapa</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
