import { div } from "framer-motion/client";
import { FeatureSteps } from "../21st.dev/feature-section";

const features = [
  {
    step: "Step 1",
    title: "Fruits",
    content:
      "Explore our fresh, sustainably farmed fruits with full traceability from farm to table.",
    image:
      "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=A3NktoJT3YXhfJ-_xi-K4psP3KHdqvnnjkwp2fk2FEM=",
  },
  {
    step: "Step 2",
    title: "Vegetables",
    content:
      "Shop our locally sourced vegetables, ensuring freshness and eco-friendly farming practices.",
    image:
      "https://media.istockphoto.com/id/915331918/photo/broccoli-in-an-old-metal-colander.webp?a=1&b=1&s=612x612&w=0&k=20&c=g16PS82_puLkuBafXfm28G67g9H5xvyAB4Bj8xCuJFY=",
  },
  {
    step: "Step 3",
    title: "Bakery",
    content:
      "Taste our artisan bakery products, made with the finest ingredients and delivered fresh daily.",
    image:
      "https://media.istockphoto.com/id/158827188/photo/fresh-italian-bread-on-a-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=cDocxDPd89dF6WF4xuPWVoN53jyaIpj7OQYxVKk_Qng=",
  },
  {
    step: "Step 4",
    title: "Dairy",
    content:
      "Enjoy premium dairy products with the highest quality standards and complete traceability.",
    image:
      "https://media.istockphoto.com/id/1499781193/photo/natural-homemade-yogurt-in-a-glass-jar-on-a-wooden-board-on-a-light-gray-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnZwvUOcXHOlRgZXjBKidq9sgTippwB5l97_uyWUmTo=",
  },
];

export default function FeatureProducts() {
  return (
    <div className="py-10">
      <FeatureSteps
        features={features}
        title="Featured Category of Products"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </div>
  );
}
