import React from "react";
import type { Metadata } from 'next';
import Hero from "./components/Hero";
// Importing the full, massive pages to build an ultra-long, detailed home page
import AboutClient from "./about/AboutClient";
import ServicesClient from "./services/ServicesClient";
import Contact from "./components/Contact";
// We can also add Projects here if they want a massive single page, but they just asked for About and Services.
import ProjectsClient from "./projects/ProjectsClient";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const Page = () => {
  return (
    <main className="overflow-hidden bg-[#030303]">
      <Hero />
      {/* We use the full, highly animated client pages directly on the home page */}
      <div className="relative z-10 bg-[#050505]">
        <AboutClient />
      </div>
      
      <div className="relative z-10">
        <ServicesClient />
      </div>

      <div className="relative z-10 bg-[#050505]">
        <ProjectsClient />
      </div>
      
      <div className="relative z-10">
        <Contact />
      </div>
    </main>
  );
};

export default Page;
