import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/Contact";

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
