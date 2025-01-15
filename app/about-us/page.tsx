"use client";

import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Award, Leaf, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { div } from "framer-motion/client";
import PageWrapper from "@/components/Container/PageWrapper";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";

export default function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageWrapper>
      <div className="relative pt-48 pb-12 dark:bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 py-12 md:py-20 h-screen">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1644144978822-c97cd4eafe4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={2000}
            height={21500}
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="tracking-tighter text-white">
                <span className="font-sans font-normal text-7xl">
                  Our Story{" "}
                </span>
                <br />
                <span className="font-serif italic font-normal text-4xl md:text-8xl">
                  of Fresh Beginnings
                </span>
              </h1>
              <p className="mt-5 font-sans text-base font-normal text-white">
                Freshness is our thing, cultivating quality for years
              </p>
            </div>
          </div>
        </div>

        <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            role="button"
          ></a>
        </div>
      </div>
      <div className="bg-green-50 dark:bg-black min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-[1600px]">
          <section className="mb-16">
            <motion.h2
              className="text-4xl font-bold text-primary mb-8 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Rooted in Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 dark:text-white mb-6 max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="font-semibold">{APP_NAME}</span> began with a
              simple idea: to bridge the gap between local farmers and
              businesses, ensuring the freshest produce reaches your table. From
              our humble beginnings as a small family-owned operation, we've
              grown into a leading supplier without losing sight of our core
              values.
            </motion.p>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: "Sustainability",
                  description: "Committed to eco-friendly practices",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Supporting local farmers and businesses",
                },
                {
                  icon: Award,
                  title: "Quality",
                  description: "Uncompromising standards in every product",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Constantly improving our processes",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col items-center text-center"
                >
                  <Card className="w-full">
                    <CardContent className="pt-6">
                      <value.icon className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                      <h4 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Meet Our Team
            </h3>
            <Tabs defaultValue="leadership" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>
              <TabsContent value="leadership">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "John Baraza",
                      position: "CEO",
                      image:
                        "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    {
                      name: "Jane Adhiambo",
                      position: "COO",
                      image:
                        "https://images.unsplash.com/photo-1546728150-b3cbeddb6f6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                      name: "Emily Lisa ",
                      position: "CFO",
                      image:
                        "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
                    },
                  ].map((member, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6 text-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-1">
                          {member.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {member.position}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="operations">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Mike Orano",
                      position: "Logistics Manager",
                      image:
                        "https://images.unsplash.com/photo-1508511267-5a04ee04ca95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                      name: "Sarah Lao",
                      position: "Quality Control",
                      image:
                        "https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
                    },
                    {
                      name: "Tom Chao",
                      position: "Farmer Relations",
                      image:
                        "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFmcmljYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
                    },
                  ].map((member, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6 text-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-1">
                          {member.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {member.position}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section className="text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-8">
              Join Our Journey
            </h3>
            <p className="text-lg text-gray-700 dark:text-white mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team.
              If you're excited about fresh produce and sustainable practices,
              we'd love to hear from you.
            </p>
            <Link href={"/contact"}>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Contact Us
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}
