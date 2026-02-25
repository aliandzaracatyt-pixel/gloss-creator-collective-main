import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  "I finally have a strategy that works with my brain instead of against it.",
  "My content feels aligned, consistent, and far less overwhelming.",
];

const TestimonialsSection = () => (
  <section className="py-24 gradient-pearl" aria-labelledby="testimonials-heading">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 id="testimonials-heading" className="sr-only">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((quote, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card rounded-xl p-8"
          >
            <Quote size={28} className="text-seafoam mb-4" />
            <p className="font-serif text-xl text-foreground italic leading-relaxed">
              "{quote}"
            </p>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
