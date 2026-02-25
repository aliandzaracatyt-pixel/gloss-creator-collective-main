import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bullets = [
  "You feel overwhelmed by traditional marketing systems.",
  "You want consistency without burnout.",
  "You need strategy that fits your real cognitive capacity.",
];

const WhoThisIsFor = () => (
  <section className="py-24 gradient-pearl" aria-labelledby="who-heading">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <motion.h2
        id="who-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-12"
      >
        Made for Neurodivergent Creators Who Are Tired of One-Size-Fits-All Advice
      </motion.h2>

      <ul className="space-y-5 text-left max-w-xl mx-auto">
        {bullets.map((text, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 text-lg text-foreground"
          >
            <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full gradient-iridescent flex items-center justify-center">
              <Check size={14} className="text-primary-foreground" />
            </span>
            {text}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhoThisIsFor;
