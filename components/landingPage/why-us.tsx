import React from "react";
import { APP_NAME } from "@/lib/constants";

const reasons = [
  {
    title: "Global Supply Network",
    desc: "Extensive network of local and international suppliers",
  },
  {
    title: "Advanced Cold Chain Analytics",
    desc: "State-of-the-art cold chain management",
  },
  {
    title: "Tailored Logistics Solutions",
    desc: "Customized ordering and delivery schedules",
  },
  {
    title: "Affordable and Flexible Pricing",
    desc: "Competitive pricing for businesses of all sizes.",
  },
];

export default function WhyUs() {
  return (
    <>
      <div className="bg-green-700 rounded-xl overflow-hidden shadow-2xl p-6 md:p-20">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl space-y-3">
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Why Choose <span className="text-yellow-400">{APP_NAME}</span>?
            </p>
            <p className="text-gray-200">
              We help you do more with less complexity by offering simple
              solutions for complex issues.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 border border-yellow-400 text-yellow-400 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg text-white font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
