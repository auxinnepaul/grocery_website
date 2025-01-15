import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";

const heroSection = () => {
  return (
    <section className="bg-green-50 dark:bg-black py-12 md:py-20 h-screen">
      <div className="relative">
        <div className="bg-green-100 dark:bg-black overflow-hidden  rounded-md shadow-2xl border">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                  width={2000}
                  height={1500}
                />
              </div>

              <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                <h1 className="text-4xl font-bold text-black dark:text-white sm:text-6xl xl:text-8xl">
                  Your Partner in Grocery Supply
                  <br />
                  Fast, Easy.
                </h1>
                <p className="mt-8 text-xl text-black dark:text-white">
                  Reliable, Efficient, and Fresh Grocery Solutions
                </p>
              </div>

              <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                <img
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full"
                  src="https://images.unsplash.com/photo-1603462903957-566630607cc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <Image
                  className="object-cover w-full h-full scale-150"
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={2000}
                  height={1500}
                />
                <Image
                  className="object-cover w-full h-full scale-150"
                  src="https://images.unsplash.com/photo-1498579397066-22750a3cb424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={200}
                  height={100}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center">
                    <svg
                      className="w-10 h-10 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h2 className="font-bold text-white text-7xl ml-2.5">
                      10+
                    </h2>
                  </div>
                  <p className="max-w-xs mt-1.5 text-xl text-white">
                    Years of Experience in the Grocery Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default heroSection;
