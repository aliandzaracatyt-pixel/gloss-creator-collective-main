import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const bullets = [
  "Decision support when you feel stuck",
  "Flexible communication (async-first available)",
  "Simple, repeatable systems designed for sustainability",
];

const WhatMakesDifferent = () => (
  <section id="why-gloss" className="py-24 bg-background" aria-labelledby="different-heading">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <motion.h2
        id="different-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6"
      >
        More Than Content Creation
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-muted-foreground mb-10 leading-relaxed"
      >
        This is not a generic agency model. I combine creator execution, long-term brand
        vision, and practical mentorship so you can grow with clarity, not chaos.
      </motion.p>

      <ul className="space-y-4 text-left max-w-lg mx-auto">
        {bullets.map((text, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-3 text-foreground"
          >
            <Sparkles size={18} className="mt-1 flex-shrink-0 text-seafoam" />
            {text}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatMakesDifferent;
