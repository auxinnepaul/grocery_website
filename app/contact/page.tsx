"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageWrapper from "@/components/Container/PageWrapper";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants"; // Import constants

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
  };

  return (
    <PageWrapper>
      <div className="py-12 md:py-24">
        <header className="bg-primary dark:bg-black text-white py-16 outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-2xl">
          <div className="mx-auto px-4 max-w-[1600px]">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl">
              We're here to answer your questions and meet your needs
            </p>
            <p className="text-xl">
              Also, we will be happy to do business with you
            </p>
          </div>
        </header>

        <main className="mx-auto px-4 py-16 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone", content: PHONE_NUMBER },
                  { icon: Mail, title: "Email", content: EMAIL },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "23 Fresh Street, Ruaraka, Nairobi Kenya",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 8am - 6pm",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-center p-4">
                      <item.icon className="w-6 h-6 text-green-600 mr-4" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Select
                    name="subject"
                    value={formState.subject}
                    onValueChange={(value) =>
                      setFormState((prev) => ({ ...prev, subject: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
