import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do I need to be neurodivergent to work with you?",
    a: "No, but this service is designed neurodivergent-first.",
  },
  {
    q: "What makes your approach different?",
    a: "I combine strategy, execution, and mentorship with systems built for real cognitive capacity.",
  },
  {
    q: "Can we work asynchronously?",
    a: "Yes. Async communication is available and encouraged when it supports your workflow.",
  },
  {
    q: "How soon can we start?",
    a: "Most clients begin within 1–2 weeks after onboarding.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background" aria-labelledby="faq-heading">
    <div className="container mx-auto px-6 max-w-2xl">
      <motion.h2
        id="faq-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="glass-card rounded-xl px-6 border-0"
          >
            <AccordionTrigger className="text-left font-medium text-foreground text-base py-5 min-h-[52px] hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
