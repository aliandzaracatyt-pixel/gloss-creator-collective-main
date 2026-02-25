import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <WhoThisIsFor />
      <WhatMakesDifferent />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Index;
