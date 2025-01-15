"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <>
      <Separator className="my-4" />
      <section className="bg-green-50 dark:bg-black py-20">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold text-green-800 mb-4"
              variants={itemVariants}
            >
              Build the future with us
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Join hundreds of satisfied businesses that trust{" "}
              <span className="font-bold mx-1">{APP_NAME}</span>
              for their grocery needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
