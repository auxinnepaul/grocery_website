"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageWrapper from "@/components/Container/PageWrapper";
import ProductFeatures from "@/components/animata/product-features";
const products = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: 2.99,
    image:
      "https://media.istockphoto.com/id/184276818/photo/red-apple.webp?a=1&b=1&s=612x612&w=0&k=20&c=WCMa5MT8Hs-1IJ-Tbyam57Hk94D6imwg2DR4tPBwHFg=",
  },
  {
    id: 2,
    name: "Fresh Spinach",
    category: "Vegetables",
    price: 1.99,
    image:
      "https://media.istockphoto.com/id/953628286/photo/baby-spinach-leaf-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YsilA7Xx78oGOPKQr75UVdYng6aYISypT5C7xyZLGy0=",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    category: "Bakery",
    price: 3.49,
    image:
      "https://media.istockphoto.com/id/639361738/photo/9-grain-artisan-bread-loaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=16jLMXh3ZVAL0NLJGXy8K2T-6losiioJKfF1CBvjUQs=",
  },
  {
    id: 4,
    name: "Organic Milk",
    category: "Dairy",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JnYW5pYyUyME1pbGt8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Free-Range Eggs",
    category: "Dairy",
    price: 5.99,
    image:
      "https://media.istockphoto.com/id/1297154905/photo/free-range-hen-eggs-an-open-egg.webp?a=1&b=1&s=612x612&w=0&k=20&c=8DTXq9FiVacukNymzfS1cxC4ehFHIayBTX30NhVGGvk=",
  },
  {
    id: 6,
    name: "Atlantic Salmon",
    category: "Seafood",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1657779868693-c26b77f779cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXRsYW50aWMlMjBTYWxtb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Bananas",
    category: "Fruits",
    price: 0.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664527307725-362b589c406d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Carrots",
    category: "Vegetables",
    price: 1.29,
    image:
      "https://media.istockphoto.com/id/1491771916/photo/rainbow-carrots-at-a-farmers-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=F2e70U46jrdawIE5FlwkQhpy2IHUYHDJ4zwbRXrlT3s=",
  },
  {
    id: 9,
    name: "French Baguette",
    category: "Bakery",
    price: 2.49,
    image:
      "https://media.istockphoto.com/id/931658626/photo/bread-baguettes-in-basket-at-baking-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=CdLC0YOg9qAPWxdE_2giExhihgoNC8NYnmy3-FTh9Fc=",
  },
  {
    id: 10,
    name: "Greek Yogurt",
    category: "Dairy",
    price: 3.79,
    image:
      "https://media.istockphoto.com/id/1499781193/photo/natural-homemade-yogurt-in-a-glass-jar-on-a-wooden-board-on-a-light-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnZwvUOcXHOlRgZXjBKidq9sgTippwB5l97_uyWUmTo=",
  },
  {
    id: 11,
    name: "Tilapia Fillet",
    category: "Seafood",
    price: 9.99,
    image:
      "https://media.istockphoto.com/id/510534973/photo/pan-fried-tilapia-with-asian-slaw-and-roasted-potatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=UaIny9hHU7kH9-evKwHyo7jzp77Ugfc37QQLeGTk-n8=",
  },
  {
    id: 12,
    name: "Strawberries",
    category: "Fruits",
    price: 3.49,
    image:
      "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=A3NktoJT3YXhfJ-_xi-K4psP3KHdqvnnjkwp2fk2FEM=",
  },
  {
    id: 13,
    name: "Broccoli",
    category: "Vegetables",
    price: 1.89,
    image:
      "https://media.istockphoto.com/id/915331918/photo/broccoli-in-an-old-metal-colander.webp?a=1&b=1&s=612x612&w=0&k=20&c=g16PS82_puLkuBafXfm28G67g9H5xvyAB4Bj8xCuJFY=",
  },
  {
    id: 14,
    name: "Ciabatta Bread",
    category: "Bakery",
    price: 2.99,
    image:
      "https://media.istockphoto.com/id/158827188/photo/fresh-italian-bread-on-a-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=cDocxDPd89dF6WF4xuPWVoN53jyaIpj7OQYxVKk_Qng=",
  },
  {
    id: 15,
    name: "Cheddar Cheese",
    category: "Dairy",
    price: 6.49,
    image:
      "https://media.istockphoto.com/id/531048911/photo/portion-of-cheddar.webp?a=1&b=1&s=612x612&w=0&k=20&c=8_0mPeQ5Ly722BCvbcMb12UGJpkQMgeQIPoId8BnbXw=",
  },
  {
    id: 16,
    name: "King Crab Legs",
    category: "Seafood",
    price: 24.99,
    image:
      "https://media.istockphoto.com/id/138008826/photo/king-crab-legs.webp?a=1&b=1&s=612x612&w=0&k=20&c=t6Mk9pVcv9R6c7lYL27CYWYn482ltA1tZLvUjTJQjQU=",
  },
];

import Link from "next/link";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });

  return (
    <PageWrapper>
      <ProductFeatures />
      <div className="min-h-screen">
        <header className="bg-primary dark:bg-black text-white py-16 outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-2xl">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <h1 className="text-4xl font-bold mb-4">Our Fresh Products</h1>
            <p className="dark:text-gray-600 text-xl">
              Quality ingredients for your culinary creations
            </p>
          </div>
        </header>

        <main className="bg-green-50 dark:bg-black mx-auto px-4 py-16 max-w-[1600px]">
          <div className="mb-4 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary ">
              Freshness Delivered, Convenience Redefined!
            </h2>
            <p className="dark:text-gray-600 text-lg md:text-xl">
              Browse through a selection of our diverse product range
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex space-x-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Fruits">Fruits</SelectItem>
                  <SelectItem value="Vegetables">Vegetables</SelectItem>
                  <SelectItem value="Bakery">Bakery</SelectItem>
                  <SelectItem value="Dairy">Dairy</SelectItem>
                  <SelectItem value="Seafood">Seafood</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4 },
                    },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">{product.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </main>

        <div className="bg-secondary text-secondary-foreground py-12 mt-16 rounded-2xl">
          <div className=" mx-auto px-4 max-w-[500px] text-center">
            <h2 className="text-3xl font-bold mb-4">Need these products?</h2>
            <p className="text-xl mb-6">
              We're here to help you get these products.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
