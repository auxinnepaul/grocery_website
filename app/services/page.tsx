"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Package, Leaf, Users, BarChart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageWrapper from "@/components/Container/PageWrapper";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Efficient Distribution",
    description:
      "Our state-of-the-art logistics ensure timely delivery of fresh produce to your doorstep.",
    details: [
      "Same-day delivery options",
      "Temperature-controlled vehicles",
      "Real-time order tracking",
      "Flexible delivery schedules",
    ],
  },
  {
    icon: Package,
    title: "Bulk Supply Solutions",
    description:
      "We offer competitive pricing and reliable supply for large-scale orders.",
    details: [
      "Volume-based discounts",
      "Customized packaging options",
      "Long-term contract benefits",
      "Dedicated account managers",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "We partner with local farms and sustainable suppliers to bring you the freshest, eco-friendly products.",
    details: [
      "Direct farm-to-business model",
      "Organic and non-GMO options",
      "Reduced carbon footprint",
      "Support for local communities",
    ],
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Our team of experts provides tailored solutions to meet your unique business needs.",
    details: [
      "Dedicated account representatives",
      "Customized product selection",
      "Menu planning assistance",
      "Regular business reviews",
    ],
  },
  {
    icon: BarChart,
    title: "Inventory Management",
    description:
      "We help you optimize your inventory with our advanced forecasting and management tools.",
    details: [
      "Automated reordering systems",
      "Demand forecasting",
      "Waste reduction strategies",
      "Integration with POS systems",
    ],
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our round-the-clock customer service ensures you're always supported, no matter the hour.",
    details: [
      "24/7 phone and chat support",
      "Emergency delivery options",
      "Online portal for easy management",
      "Regular check-ins and feedback sessions",
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <PageWrapper>
      <div className="bg-green-50 dark:bg-black">
        <div className="py-8 md:py-10">
          <header className="bg-primary dark:bg-black text-white py-16 outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-2xl">
            <div className="container mx-auto px-4 max-w-[1600px]">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl">
                Comprehensive solutions for your grocery supply needs
              </p>
            </div>
          </header>

          <main className="container mx-auto px-4 py-16 max-w-[1600px]">
            <motion.section
              className="mb-20"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                className="text-3xl font-bold text-primary mb-8 text-center"
                variants={itemVariants}
              >
                Tailored Services for Your Business
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className={`h-full cursor-pointer transition-all duration-300 ${
                        selectedService.title === service.title
                          ? "ring-2 ring-green-500 shadow-lg"
                          : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedService(service)}
                    >
                      <CardContent className="p-6">
                        <service.icon className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Service Details
              </h2>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <selectedService.icon className="w-16 h-16 text-green-600 mb-4 md:mb-0 md:mr-6" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {selectedService.title}
                    </h3>
                    <p className="text-gray-600 dark:text-white">
                      {selectedService.description}{" "}
                    </p>
                  </div>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {selectedService.details.map((detail, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{detail}</AccordionTrigger>
                      <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-3xl font-bold text-primary mb-8">
                How It Works
              </h2>
              <Tabs defaultValue="businesses" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="businesses">For Businesses</TabsTrigger>
                  <TabsTrigger value="suppliers">For Suppliers</TabsTrigger>
                </TabsList>
                <TabsContent value="businesses">
                  <ol className="list-decimal list-inside space-y-4 text-lg">
                    <li>
                      Sign up for an account and complete your business profile
                    </li>
                    <li>
                      Browse our product catalog and select items for your order
                    </li>
                    <li>
                      Choose your preferred delivery schedule and frequency
                    </li>
                    <li>
                      Place your order and track its progress in real-time
                    </li>
                    <li>
                      Receive your delivery and enjoy fresh, quality products
                    </li>
                  </ol>
                </TabsContent>
                <TabsContent value="suppliers">
                  <ol className="list-decimal list-inside space-y-4 text-lg">
                    <li>
                      Apply to become a supplier through our online portal
                    </li>
                    <li>
                      Complete the verification process and quality checks
                    </li>
                    <li>List your products and set pricing in our system</li>
                    <li>Receive orders and prepare them for pickup</li>
                    <li>Get paid promptly for your quality produce</li>
                  </ol>
                </TabsContent>
              </Tabs>
            </section>
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Our Process
              </h2>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <ol className="list-decimal list-inside space-y-4">
                  <li className="text-lg">
                    <span className="font-semibold">Initial Consultation:</span>{" "}
                    We meet with you to understand your specific needs and
                    requirements.
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Customized Plan:</span> Our
                    team develops a tailored supply plan based on your business
                    model and preferences.
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Account Setup:</span> We set
                    up your account and provide training on our ordering system.
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Regular Deliveries:</span>{" "}
                    We begin your scheduled deliveries, ensuring fresh and
                    timely supply.
                  </li>
                  <li className="text-lg">
                    <span className="font-semibold">Ongoing Support:</span> Your
                    dedicated account manager provides continuous support and
                    optimizes your service.
                  </li>
                </ol>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied businesses that trust FreshMart
                Supply for their grocery needs.
              </p>
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                >
                  Request a Quote
                </Button>
              </Link>
            </section>
          </main>
        </div>
      </div>
    </PageWrapper>
  );
}
