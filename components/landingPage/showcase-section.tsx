import { Truck, Building, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ShowcaseSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1500px] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-green-800 mb-12">
          Fresh Produce, Wholesale Prices, Unmatched Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Truck,
              title: "Fast Delivery",
              description: "Same-day delivery to local businesses",
            },
            {
              icon: Building,
              title: "Bulk Supply",
              description: "Wholesale quantities for large organizations",
            },
            {
              icon: Users,
              title: "Personal Service",
              description: "Dedicated customer service",
            },
            {
              icon: Award,
              title: "Quality Guarantee",
              description: "Only the freshest, highest quality produce",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <item.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="max-w-1 mx-auto mb-10">
          <Link href={"/products"}>
            <Button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
              Learn More
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
