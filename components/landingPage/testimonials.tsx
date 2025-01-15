import { AnimatedTestimonials } from "@/components/21st.dev/animated-testimonials";
import React from "react";

const testimonials = [
  {
    name: "John Orero",
    designation: "Product Manager at FreshEats",
    src: "https://images.unsplash.com/photo-1576695444267-40cdd214f06e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    quote:
      "Grocery Hub Kenya has transformed our kitchen operations. Their consistent quality and reliable delivery have allowed us to elevate our menu offerings and delight our customers.",
  },
  {
    name: "Sarah Oman",
    designation: "CTO at GreenGrocer",
    src: "https://images.unsplash.com/photo-1583823129868-b59a5a9cbeb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    quote:
      "Working with FreshMart Supply has streamlined our procurement process. Their bulk supply options and flexible ordering system have significantly reduced our costs and improved our efficiency.",
  },
  {
    name: "Michael Kibet",
    designation: "Engineering Lead at OrganicLife",
    src: "https://images.unsplash.com/photo-1508511267-5a04ee04ca95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
    quote:
      "As a small business owner, I appreciate the personal touch Grocery Hub Kenya brings. Their dedicated account manager understands our needs and always goes above and beyond to ensure we have the best produce.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        What Our Clients Say
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
