import React from "react";
import type { Metadata } from 'next';
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ServicesSection />
      <About />
      <Contact />
    </main>
  );
};

export default Page;
