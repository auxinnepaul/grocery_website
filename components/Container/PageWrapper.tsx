import React from "react";
import { ScrollToTop } from "../ScrollToTop";
import Footer from "@/components/footer";
import NavBar from "../navBar";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-green-50 dark:bg-black">
      <NavBar />
      {/* <main className="mx- auto max-w-[1600px] px-2 items-center"> */}
      <main className="mx-auto max-w-[1800px] px-4 items-center py-16 md:py-20">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
