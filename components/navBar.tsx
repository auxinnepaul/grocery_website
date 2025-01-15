"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  ChevronDown,
  X,
  LeafyGreen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { APP_NAME } from "@/lib/constants";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = [
    "Fruits & Vegetables",
    "Dairy & Eggs",
    "Bakery",
    "Meat & Seafood",
    "Pantry",
    "Frozen Foods",
  ];

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsVisible(false);
      } else {
        // if scroll up show the navbar
        setIsVisible(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);

      // Set sticky when scrolled
      setIsSticky(window.scrollY > 0);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isSticky
          ? "bg-white shadow-2xl"
          : "bg-gradient-to-r from-green-100 to-green-200 dark:from-black dark:to-black"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <LeafyGreen className="h-8 w-8 text-primary dark:text-white" />
              <span className="ml-2 text-xl md:text-3xl font-bold text-primary">
                {APP_NAME}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-primary dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-primary dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-primary dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="text-primary dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              About Us
            </Link>
          </div>

          {/* theme, contact us */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative"></div>
            <Link
              href="/contact"
              className="text-primary dark:text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black  shadow-lg">
          <Link
            href="/"
            className="text-primary hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-primary hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </Link>
          <Link
            href="/services"
            className="text-primary hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="text-primary hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-green-200 bg-white dark:bg-black ">
          <div className="flex items-center px-5">
            <Link
              href="/contact"
              className="text-primary hover:bg-green-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              <Button> Contact Us</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
